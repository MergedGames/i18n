const fs = require('fs');
const path = require('path');

const translationsDir = './merged';

const outputFile = 'translations.generated.json';

function listJsonFiles(dir, prefix = '') {
    let files = fs.readdirSync(dir);
    let result = {};

    files.forEach(file => {
        let fullPath = path.join(dir, file);
        let stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            let subPrefix = prefix ? `${prefix}.${file}` : file;
            Object.assign(result, listJsonFiles(fullPath, subPrefix));
        } else if (file.endsWith('.json')) {
            let key = `${prefix}.${path.basename(file, '.json')}`;
            result[key] = fullPath;
        }
    });

    return result;
}

function generateTranslationsIndex() {
    let translations = {};
    let files = listJsonFiles(translationsDir);

    Object.entries(files).forEach(([key, filePath]) => {
        let content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        translations[key] = content;
    });

    fs.writeFileSync(outputFile, JSON.stringify(translations, null, 4), 'utf8');
    console.log(`Translations index generated: ${outputFile}`);
}

generateTranslationsIndex();
