#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get project name
const projectName = process.argv[2];

if (!projectName) {
  console.log("❌ Usage: create-jr-backend <project-name>");
  process.exit(1);
}

// Template location
const template = path.join(__dirname, "..", "templates", "default");

// Where the new project will be created
const destination = path.join(process.cwd(), projectName);

// Check if folder already exists
if (fs.existsSync(destination)) {
  console.log("❌ Folder already exists.");
  process.exit(1);
}

try {
  console.log("🚀 Creating project...");

  // Copy template
  fs.copySync(template, destination);
  console.log("✅ Template copied.");

  // Change package name
  const packageJsonPath = path.join(destination, "package.json");

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = fs.readJsonSync(packageJsonPath);

    packageJson.name = projectName;

    fs.writeJsonSync(packageJsonPath, packageJson, {
      spaces: 2,
    });

    console.log("✅ Updated package.json");
  }

  // Create .env from .env.example
  const envExample = path.join(destination, ".env.example");
  const env = path.join(destination, ".env");

  if (fs.existsSync(envExample)) {
    fs.copySync(envExample, env);
    console.log("✅ Created .env");
  }

  // Install dependencies
  console.log("📦 Installing dependencies...");

  execSync("npm install", {
    cwd: destination,
    stdio: "inherit",
  });

  console.log("\n🎉 Project created successfully!\n");

  console.log(`Next Steps:

cd ${projectName}

npm start
`);

} catch (err) {
  console.error("❌ Error creating project.");
  console.error(err.message);
}