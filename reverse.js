const fs = require("fs");
const path = require("path");

const inputFile = "translations.generated.json";
const outputDir = "./merged";

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function reverseTranslations() {
  const translations = JSON.parse(fs.readFileSync(inputFile, "utf8"));

  ensureDirectoryExists(outputDir);

  Object.entries(translations).forEach(([key, content]) => {
    const pathSegments = key.split(".");

    const fileName = pathSegments.pop() + ".json";

    const dirPath = path.join(outputDir, ...pathSegments);

    ensureDirectoryExists(dirPath);

    const filePath = path.join(dirPath, fileName);

    fs.writeFileSync(filePath, JSON.stringify(content, null, 4), "utf8");
  });

  console.log(
    `Translations have been reversed into directory structure at: ${outputDir}`
  );
}

reverseTranslations();
