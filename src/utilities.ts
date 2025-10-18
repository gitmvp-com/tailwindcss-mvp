/**
 * Utility class definitions
 */

export interface Utility {
  pattern: RegExp
  generate: (match: RegExpMatchArray) => string
}

const colors: Record<string, string> = {
  'white': '#ffffff',
  'black': '#000000',
  'gray-100': '#f7fafc',
  'gray-200': '#edf2f7',
  'gray-300': '#e2e8f0',
  'gray-400': '#cbd5e0',
  'gray-500': '#a0aec0',
  'gray-600': '#718096',
  'gray-700': '#4a5568',
  'gray-800': '#2d3748',
  'gray-900': '#1a202c',
  'red-500': '#f56565',
  'red-600': '#e53e3e',
  'blue-500': '#4299e1',
  'blue-600': '#3182ce',
  'green-500': '#48bb78',
  'green-600': '#38a169',
  'yellow-500': '#ecc94b',
  'purple-500': '#9f7aea',
}

const spacing: Record<string, string> = {
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  'auto': 'auto',
}

const fontSizes: Record<string, [string, string]> = {
  'xs': ['0.75rem', '1rem'],
  'sm': ['0.875rem', '1.25rem'],
  'base': ['1rem', '1.5rem'],
  'lg': ['1.125rem', '1.75rem'],
  'xl': ['1.25rem', '1.75rem'],
  '2xl': ['1.5rem', '2rem'],
  '3xl': ['1.875rem', '2.25rem'],
  '4xl': ['2.25rem', '2.5rem'],
  '5xl': ['3rem', '1'],
  '6xl': ['3.75rem', '1'],
}

const fontWeights: Record<string, string> = {
  'thin': '100',
  'light': '300',
  'normal': '400',
  'medium': '500',
  'semibold': '600',
  'bold': '700',
  'extrabold': '800',
}

export const utilities: Utility[] = [
  // Display
  {
    pattern: /^(block|inline-block|inline|flex|grid|hidden)$/,
    generate: (match) => `.${match[0]} { display: ${match[0] === 'hidden' ? 'none' : match[0]}; }`,
  },
  
  // Background colors
  {
    pattern: /^bg-([\w-]+)$/,
    generate: (match) => {
      const color = colors[match[1]]
      return color ? `.${match[0]} { background-color: ${color}; }` : ''
    },
  },
  
  // Text colors
  {
    pattern: /^text-([\w-]+)$/,
    generate: (match) => {
      const color = colors[match[1]]
      if (color) {
        return `.${match[0]} { color: ${color}; }`
      }
      // Check if it's a text alignment
      if (['left', 'center', 'right', 'justify'].includes(match[1])) {
        return `.${match[0]} { text-align: ${match[1]}; }`
      }
      // Check if it's a font size
      const fontSize = fontSizes[match[1]]
      if (fontSize) {
        return `.${match[0]} { font-size: ${fontSize[0]}; line-height: ${fontSize[1]}; }`
      }
      return ''
    },
  },
  
  // Border colors
  {
    pattern: /^border-([\w-]+)$/,
    generate: (match) => {
      const color = colors[match[1]]
      if (color) {
        return `.${match[0]} { border-color: ${color}; }`
      }
      // Check if it's a border width
      if (['0', '2', '4', '8'].includes(match[1])) {
        return `.${match[0]} { border-width: ${match[1]}px; }`
      }
      return ''
    },
  },
  
  // Border
  {
    pattern: /^border$/,
    generate: (match) => `.${match[0]} { border-width: 1px; border-style: solid; }`,
  },
  
  // Padding
  {
    pattern: /^p-([\w-]+)$/,
    generate: (match) => {
      const value = spacing[match[1]]
      return value ? `.${match[0]} { padding: ${value}; }` : ''
    },
  },
  {
    pattern: /^px-([\w-]+)$/,
    generate: (match) => {
      const value = spacing[match[1]]
      return value ? `.${match[0]} { padding-left: ${value}; padding-right: ${value}; }` : ''
    },
  },
  {
    pattern: /^py-([\w-]+)$/,
    generate: (match) => {
      const value = spacing[match[1]]
      return value ? `.${match[0]} { padding-top: ${value}; padding-bottom: ${value}; }` : ''
    },
  },
  
  // Margin
  {
    pattern: /^m-([\w-]+)$/,
    generate: (match) => {
      const value = spacing[match[1]]
      return value ? `.${match[0]} { margin: ${value}; }` : ''
    },
  },
  {
    pattern: /^mx-([\w-]+)$/,
    generate: (match) => {
      const value = spacing[match[1]]
      return value ? `.${match[0]} { margin-left: ${value}; margin-right: ${value}; }` : ''
    },
  },
  {
    pattern: /^my-([\w-]+)$/,
    generate: (match) => {
      const value = spacing[match[1]]
      return value ? `.${match[0]} { margin-top: ${value}; margin-bottom: ${value}; }` : ''
    },
  },
  {
    pattern: /^mb-([\w-]+)$/,
    generate: (match) => {
      const value = spacing[match[1]]
      return value ? `.${match[0]} { margin-bottom: ${value}; }` : ''
    },
  },
  
  // Font weight
  {
    pattern: /^font-([\w-]+)$/,
    generate: (match) => {
      const weight = fontWeights[match[1]]
      return weight ? `.${match[0]} { font-weight: ${weight}; }` : ''
    },
  },
  
  // Width
  {
    pattern: /^w-([\w-]+)$/,
    generate: (match) => {
      const value = spacing[match[1]]
      if (value) {
        return `.${match[0]} { width: ${value}; }`
      }
      if (match[1] === 'full') {
        return `.${match[0]} { width: 100%; }`
      }
      return ''
    },
  },
  
  // Height
  {
    pattern: /^h-([\w-]+)$/,
    generate: (match) => {
      const value = spacing[match[1]]
      if (value) {
        return `.${match[0]} { height: ${value}; }`
      }
      if (match[1] === 'full') {
        return `.${match[0]} { height: 100%; }`
      }
      return ''
    },
  },
  
  // Max width
  {
    pattern: /^max-w-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|full)$/,
    generate: (match) => {
      const maxWidths: Record<string, string> = {
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        'full': '100%',
      }
      const value = maxWidths[match[1]]
      return value ? `.${match[0]} { max-width: ${value}; }` : ''
    },
  },
  
  // Rounded
  {
    pattern: /^rounded(-lg|-xl|-full)?$/,
    generate: (match) => {
      const radiusMap: Record<string, string> = {
        '': '0.25rem',
        '-lg': '0.5rem',
        '-xl': '0.75rem',
        '-full': '9999px',
      }
      const radius = radiusMap[match[1] || '']
      return `.${match[0]} { border-radius: ${radius}; }`
    },
  },
  
  // Flexbox
  {
    pattern: /^items-(start|end|center|baseline|stretch)$/,
    generate: (match) => `.${match[0]} { align-items: ${match[1]}; }`,
  },
  {
    pattern: /^justify-(start|end|center|between|around|evenly)$/,
    generate: (match) => {
      const valueMap: Record<string, string> = {
        'start': 'flex-start',
        'end': 'flex-end',
        'center': 'center',
        'between': 'space-between',
        'around': 'space-around',
        'evenly': 'space-evenly',
      }
      return `.${match[0]} { justify-content: ${valueMap[match[1]]}; }`
    },
  },
  {
    pattern: /^flex-(row|col|row-reverse|col-reverse)$/,
    generate: (match) => {
      const directionMap: Record<string, string> = {
        'row': 'row',
        'col': 'column',
        'row-reverse': 'row-reverse',
        'col-reverse': 'column-reverse',
      }
      return `.${match[0]} { flex-direction: ${directionMap[match[1]]}; }`
    },
  },
]
