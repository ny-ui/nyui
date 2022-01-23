import defaultTheme from './default-theme'

const IS_SERVER = typeof window === 'undefined'

const resolveTheme = () => {
  let userTheme = {}
  if (IS_SERVER) {
    try {
      const { cosmiconfigSync } = require('cosmiconfig')
      const explorer = cosmiconfigSync('nyui')
      const result = explorer.search()
      if (result) {
        userTheme = result.config?.theme || {}
      }
    } catch {
      // do nothing
    }
  }
  return { ...defaultTheme, ...userTheme }
}

const theme = resolveTheme()

export default theme
