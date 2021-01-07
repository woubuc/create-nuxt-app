#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const spawn = require('cross-spawn');
const validate = require('validate-npm-package-name');

const data = require('./data');

console.log('Initialising...');

let name = process.argv[2];

if (!name) {
	console.error('Err: Cannot create project with empty name');
	process.exit(1);
}

let valid = validate(name);
if (!valid.validForNewPackages) {
	console.error('Err: Invalid package name: %s', name);
	process.exit(1);
}

let dir = path.join(process.cwd(), name);
if (fs.pathExistsSync(dir)) {
	console.error('Err: Directory already exists: %s', name);
	process.exit(1);
}

console.log('Copying template files...');

fs.mkdirpSync(dir);

let copySource = path.join(__dirname, 'template');
fs.copySync(copySource, dir);

let packageJsonPath = path.join(dir, 'package.json');
let packageJson = fs.readJsonSync(packageJsonPath);
packageJson.name = name;
fs.writeJsonSync(packageJsonPath, packageJson);

console.log('Installing dependencies (this may take a while)...');
spawn.sync('yarn', ['add', ...data.dependencies], { cwd: dir });

console.log('Installing dev dependencies (this may take a while)...');
spawn.sync('yarn', ['add', '--dev', ...data.devDependencies], { cwd: dir });

console.log('Done');
