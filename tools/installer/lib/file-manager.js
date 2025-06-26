const fs = require("fs-extra");
const path = require("path");
const crypto = require("crypto");
const glob = require("glob");
const yaml = require("js-yaml");

// Dynamic import for ES module
let chalk;

// Initialize ES modules
async function initializeModules() {
  if (!chalk) {
    chalk = (await import("chalk")).default;
  }
}

class FileManager {
  constructor() {
    this.manifestDir = ".bmad-core";
    this.manifestFile = "install-manifest.yml";
  }

  async copyFile(source, destination) {
    try {
      await fs.ensureDir(path.dirname(destination));
      await fs.copy(source, destination);
      return true;
    } catch (error) {
      await initializeModules();
      console.error(chalk.red(`Failed to copy ${source}:`), error.message);
      return false;
    }
  }

  async copyDirectory(source, destination) {
    try {
      await fs.ensureDir(destination);
      await fs.copy(source, destination);
      return true;
    } catch (error) {
      await initializeModules();
      console.error(
        chalk.red(`Failed to copy directory ${source}:`),
        error.message
      );
      return false;
    }
  }

  async copyGlobPattern(pattern, sourceDir, destDir) {
    const files = glob.sync(pattern, { cwd: sourceDir });
    const copied = [];

    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file);

      if (await this.copyFile(sourcePath, destPath)) {
        copied.push(file);
      }
    }

    return copied;
  }

  async calculateFileHash(filePath) {
    try {
      const content = await fs.readFile(filePath);
      return crypto
        .createHash("sha256")
        .update(content)
        .digest("hex")
        .slice(0, 16);
    } catch (error) {
      return null;
    }
  }

  async createManifest(installDir, config, files) {
    const manifestPath = path.join(
      installDir,
      this.manifestDir,
      this.manifestFile
    );

    const manifest = {
      version: require("../../../package.json").version,
      installed_at: new Date().toISOString(),
      install_type: config.installType,
      agent: config.agent || null,
      ide_setup: config.ide || null,
      ides_setup: config.ides || [],
      files: [],
    };

    // Add file information
    for (const file of files) {
      const filePath = path.join(installDir, file);
      const hash = await this.calculateFileHash(filePath);

      manifest.files.push({
        path: file,
        hash: hash,
        modified: false,
      });
    }

    // Write manifest
    await fs.ensureDir(path.dirname(manifestPath));
    await fs.writeFile(manifestPath, yaml.dump(manifest, { indent: 2 }));

    return manifest;
  }

  async readManifest(installDir) {
    const manifestPath = path.join(
      installDir,
      this.manifestDir,
      this.manifestFile
    );

    try {
      const content = await fs.readFile(manifestPath, "utf8");
      return yaml.load(content);
    } catch (error) {
      return null;
    }
  }

  async checkModifiedFiles(installDir, manifest) {
    const modified = [];

    for (const file of manifest.files) {
      const filePath = path.join(installDir, file.path);
      const currentHash = await this.calculateFileHash(filePath);

      if (currentHash && currentHash !== file.hash) {
        modified.push(file.path);
      }
    }

    return modified;
  }

  async backupFile(filePath) {
    const backupPath = filePath + ".bak";
    let counter = 1;
    let finalBackupPath = backupPath;

    // Find a unique backup filename
    while (await fs.pathExists(finalBackupPath)) {
      finalBackupPath = `${filePath}.bak${counter}`;
      counter++;
    }

    await fs.copy(filePath, finalBackupPath);
    return finalBackupPath;
  }

  async ensureDirectory(dirPath) {
    try {
      await fs.ensureDir(dirPath);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async pathExists(filePath) {
    return fs.pathExists(filePath);
  }

  async readFile(filePath) {
    return fs.readFile(filePath, "utf8");
  }

  async writeFile(filePath, content) {
    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, content);
  }

  async removeDirectory(dirPath) {
    await fs.remove(dirPath);
  }
}

module.exports = new FileManager();
