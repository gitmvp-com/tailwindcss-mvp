/**
 * Parses HTML content and extracts all class names
 */
export function parseHTML(html: string): Set<string> {
  const classes = new Set<string>()
  
  // Match class attributes: class="..." or class='...'
  const classRegex = /class=["']([^"']+)["']/g
  let match
  
  while ((match = classRegex.exec(html)) !== null) {
    const classNames = match[1].split(/\s+/)
    classNames.forEach(className => {
      if (className.trim()) {
        classes.add(className.trim())
      }
    })
  }
  
  return classes
}
