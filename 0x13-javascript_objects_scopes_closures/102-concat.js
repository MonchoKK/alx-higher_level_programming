#!/usr/bin/node
const fs = require('fs');

const fileA = process.argv[2];
const fileB = process.argv[3];
const fileC = process.argv[4];

if (!fileA || !fileB || !fileC) {
  console.log('Usage: ./concatFiles.js <first file> <second file> <destination file>');
  process.exit(1);
}

try {
  // Read content of first file
  const contentA = fs.readFileSync(fileA, 'utf8');
  // Read content of second file
  const contentB = fs.readFileSync(fileB, 'utf8');

  // Concatenate content and write to the destination file
  fs.writeFileSync(fileC, contentA + contentB);

  console.log('Files concatenated successfully.');
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
