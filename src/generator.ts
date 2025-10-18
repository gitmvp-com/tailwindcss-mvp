import { parseHTML } from './parser'
import { generateCSS } from './cssGenerator'

export class TailwindMVP {
  generate(html: string): string {
    const classes = parseHTML(html)
    return generateCSS(classes)
  }

  generateFromFile(filePath: string): string {
    const fs = require('fs')
    const html = fs.readFileSync(filePath, 'utf-8')
    return this.generate(html)
  }
}
