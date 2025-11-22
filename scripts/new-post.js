/* This is a script to create a new post markdown file with front-matter */

import fs from "node:fs";
import path from "node:path";
import chalk from "chalk-template";
import sanitize from "sanitize-filename";

function toSafeName(str) {
	return str
		.normalize("NFKD") // normalize Unicode (handles accents)
		.replace(/[\u0300-\u036f]/g, "") // remove accent marks
		.replace(/[^a-zA-Z0-9\s_-]/g, "") // remove unsafe characters
		.trim() // remove leading/trailing spaces
		.replace(/\s+/g, "-") // replace multiple spaces with "-"
		.replace(/-+/g, "-") // clean multiple "-"
		.toLowerCase();
}

const args = process.argv.slice(2);

if (args.length === 0) {
	console.error(`Error: No filename argument provided
Usage: npm run new-post -- <filename>`);
	process.exit(1); // Terminate the script and return error code 1
}

const originalTitle = args[0];
let fileName = toSafeName(sanitize(originalTitle));

// Add .md extension if not present
const fileExtensionRegex = /\.(md|mdx)$/i;
if (!fileExtensionRegex.test(fileName)) {
	fileName += ".md";
}

const markdownDir = "./src/content/posts/";
const assetsDir = "./public/assets/posts/";
const markdownFullPath = path.join(markdownDir, fileName);
const assetsDirFullPath = path.join(assetsDir, path.parse(fileName).name);

if (fs.existsSync(markdownFullPath)) {
	console.error(`Error: File ${markdownFullPath} already exists `);
	process.exit(1);
}

if (fs.existsSync(assetsDirFullPath)) {
	console.error(`Error: Directory ${assetsDir} already exists `);
	process.exit(1);
}

// recursive mode creates multi-level directories
const markdownDirPath = path.dirname(markdownFullPath);
if (!fs.existsSync(markdownDirPath)) {
	fs.mkdirSync(markdownDirPath, { recursive: true });
}

if (!fs.existsSync(assetsDirFullPath)) {
	fs.mkdirSync(assetsDirFullPath, { recursive: true });
}

const content = `---
title: ${args[0]}
published: ${new Date().toISOString()}
# updated:
description: ''
# prefix starts with '/' is relative to the 'public' folder (/images/banner.webp)
# prefix starts with './' is relative to the markdown file (./cover.jpg)
# prefix starts with '/' and './' is relative to the 'assets' folder (images/)
# note: store images in 'public' folder will have SEO image benefits.
image: ''
tags: []
category: ''
# set to false to publish
draft: true
lang: 'id'
---
`;

fs.writeFileSync(markdownFullPath, content);

let message = chalk`{underline {bold {#ffffff Markdown Post Generator}}}\n`;
message += chalk`{#22c55e +} 📄 {#0ea5e9 ${markdownFullPath}} (markdown file 📖)\n`;
message += chalk`{#22c55e +} 📁 {#0ea5e9 ${assetsDirFullPath}} (assets directory 🌄)\n\n`;
message += chalk`{underline {bold {#ffffff Note}}}\n`;
message += chalk`{italic Please store assets like images in the} {underline {bold {#0ea5e9 ${assetsDirFullPath}}}} {italic directory.}`;

console.log(message);
