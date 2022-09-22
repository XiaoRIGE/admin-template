const requireDirective = require.context('.', true, /\.js$/)

function removerLastIndex(str) {
  return str.slice(2, -3)
}

// 自定义指令
let directives = {}
requireDirective.keys().map((file) => {
  const name = removerLastIndex(file)
  if (name !== 'index') {
    directives = {
      ...directives,
      [name]: requireDirective(file).default,
    }
  }

  return false
})

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}
