import { utilities } from './utilities'

/**
 * Generates CSS from a set of class names
 */
export function generateCSS(classes: Set<string>): string {
  const cssRules: string[] = []
  
  // Add CSS reset
  cssRules.push(`/* Tailwind CSS MVP - Generated Utilities */`)
  cssRules.push(`*, ::before, ::after { box-sizing: border-box; border-width: 0; border-style: solid; }`)
  cssRules.push(`html { line-height: 1.5; -webkit-text-size-adjust: 100%; }`)
  cssRules.push(`body { margin: 0; font-family: inherit; line-height: inherit; }`)
  cssRules.push(`\n/* Utilities */`)
  
  // Generate CSS for each class that matches a utility pattern
  classes.forEach(className => {
    for (const utility of utilities) {
      const match = className.match(utility.pattern)
      if (match) {
        const css = utility.generate(match)
        if (css) {
          cssRules.push(css)
        }
        break
      }
    }
  })
  
  return cssRules.join('\n')
}
