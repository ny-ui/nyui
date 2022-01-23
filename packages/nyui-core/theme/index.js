import defaultTheme from './default-theme'

//  const result = resolveConfig([userConfig, defaultConfig])

const resolveTheme = () => {
  let userTheme = {}
  // console.log(path.resolve('./nyui.config.js'))
  if (typeof window === 'undefined') {
    userTheme.primary = '#dc2626'
    console.log(require.main.filename)
    console.log(__dirname, 'dirname')
    console.log('find nyui.config.js')
  }
  return { ...defaultTheme, ...userTheme }
}

const theme = resolveTheme()

export default theme
