### Merged i18n
# Warning! This repository has been transferred to https://git.eplg.services/mergedgames/i18n
# Centralized Translation Repository

This repository manages all multilingual translations for the project in a single JSON file: `translations.generated.json`. The centralized structure ensures consistency and simplifies updates by consolidating all languages in one place.

### **Translation Format**

The `translations.generated.json` file organizes translations in a nested structure:
- **Keys** represent the unique identifiers for each translatable string, generated automatically from the file structure.
- **Sub-keys** represent the supported language codes (e.g., `en`, `de`, `fr`).
- **Values** are the localized translations for each language.

#### Example:

```json
{
    "de": "Party erstellen",
    "en": "Create party",
    "fr": "Créer une partie",
    "it": "Crea una partita",
    "pl": "Utwórz grupę",
    "ru": "Создать группу",
    "zh": "创建队伍"
}
```

### **Using the Project**

#### Prerequisites
- Ensure you have [Node.js](https://nodejs.org) installed.

#### Generating the Translations Index
1. **Add or modify translation files**: Place JSON translation files in the appropriate directory structure under the `merged` folder.
2. **Run the generator**:
   ```bash
   node generator.js
   ```
   This will produce the `translations.generated.json` file in the root directory, containing all the translations consolidated into a single JSON object.

### **Contributing**

We welcome contributions to improve or expand translations. Please follow these steps:

1. **Fork the repository.**
2. **Create a new branch** for your changes.
3. **Update or add translation files**:
   - Place your JSON files in the appropriate folder structure under `merged`.
   - Run the `generator.js` script to regenerate the `translations.generated.json` file.
4. **Submit a pull request** with a clear description of your changes.

### **Contact**

If you have questions or suggestions, feel free to open an issue in the repository.
