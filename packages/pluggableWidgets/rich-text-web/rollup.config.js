<<<<<<< HEAD
import preserveDirectives from "rollup-preserve-directives";

export default args => {
    const result = args.configDefaultConfig;
    return result.map((config, _index) => {
        config.plugins = [...config.plugins, preserveDirectives()];
        return config;
    });
};
=======
import json from "@rollup/plugin-json";
import { dirname, join } from "path";
import copy from "recursive-copy";
import command from "rollup-plugin-command";

const sourcePath = process.cwd();
const outDir = join(sourcePath, "dist/tmp/widgets/");
const widgetPackageJson = require(join(sourcePath, "package.json"));
const widgetName = widgetPackageJson.widgetName;
const widgetPackage = widgetPackageJson.packagePath;
const outWidgetDir = join(widgetPackage.replace(/\./g, "/"), widgetName.toLowerCase());
const absoluteOutPackageDir = join(outDir, outWidgetDir);
const langsDir = join(sourcePath, "src/langs"); // Path to your langs folder

const FILTER_PLUGINS_THEMES = [
    "**/skins/content/default/*.js",
    "**/skins/content/default/content.css",
    "**/skins/content/dark/*.js",
    "**/skins/content/dark/content.css",
    "**/skins/ui/oxide/*.min.css",
    "**/skins/ui/oxide/*.js*",
    "**/plugins/**/index.js",
    "**/plugins/**/plugin.js",
    "**/tinymce.min.js",
    "**/plugins/help/js/i18n/keynav/*.js"
];

export default args => {
    const result = args.configDefaultConfig;
    return result.map((config, index) => {
        if (index === 0) {
            // Copy TinyMCE core files and themes/plugins
            config.plugins = [...config.plugins, copyTinyMCEDirToDist(absoluteOutPackageDir, FILTER_PLUGINS_THEMES)];

            // Copy the langs folder
            config.plugins.push(copyLangsFolder(langsDir, join(absoluteOutPackageDir, "langs")));
        }
        config.plugins.push(json());
        return config;
    });
};

// Function to copy TinyMCE directory to the output folder
function copyTinyMCEDirToDist(outDir, filter) {
    return command([
        async () => {
            return copy(dirname(require.resolve("tinymce")), outDir, {
                transform: src => {},
                overwrite: true,
                filter: filter
            });
        }
    ]);
}

// Function to copy the langs folder
function copyLangsFolder(src, dest) {
    return command([
        async () => {
            return copy(src, dest, {
                overwrite: true
            });
        }
    ]);
}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
