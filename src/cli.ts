#!/usr/bin/env node

import * as fs from 'fs'
import * as path from 'path'
import { TailwindMVP } from './generator'

function main() {
  const args = process.argv.slice(2)
  
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    console.log(`
Tailwind CSS MVP - Utility-first CSS Generator

Usage:
  tailwindcss-mvp <input.html> [options]

Options:
  -o, --output <file>    Output CSS file (default: output.css)
  -h, --help             Show this help message

Example:
  tailwindcss-mvp index.html -o styles.css
`)
    process.exit(0)
  }
  
  const inputFile = args[0]
  let outputFile = 'output.css'
  
  // Parse output option
  const outputIndex = args.findIndex(arg => arg === '-o' || arg === '--output')
  if (outputIndex !== -1 && args[outputIndex + 1]) {
    outputFile = args[outputIndex + 1]
  }
  
  if (!fs.existsSync(inputFile)) {
    console.error(`Error: Input file '${inputFile}' not found`)
    process.exit(1)
  }
  
  try {
    const generator = new TailwindMVP()
    const css = generator.generateFromFile(inputFile)
    
    // Ensure output directory exists
    const outputDir = path.dirname(outputFile)
    if (outputDir !== '.') {
      fs.mkdirSync(outputDir, { recursive: true })
    }
    
    fs.writeFileSync(outputFile, css)
    console.log(`✅ Generated CSS: ${outputFile}`)
    console.log(`📊 File size: ${(css.length / 1024).toFixed(2)} KB`)
  } catch (error) {
    console.error('Error generating CSS:', error)
    process.exit(1)
  }
}

main()
