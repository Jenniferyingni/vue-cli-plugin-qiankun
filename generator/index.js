// const slaveMain = require('./main')

module.exports = (api) => {
  const { port } = api.options
  const { projectName } = api.rootOptions
 
  api.render('./template')

  api.extendPackage({
    scripts: {
      serve: `vue-cli-service serve --port ${port}`
    },
    dependencies:{
      'vue-router':'^3.1.5',
      "less": "^3.10.3",
      "less-loader": "^5.0.0"
    }
  })

  api.postProcessFiles((files) => {
    const routerConfigPath = 'src/main.js'
    const vueConfigPath = 'vue.config.js'

    // 替换 vue-router 的 basePath
    if (files[routerConfigPath]) {
      files[routerConfigPath] = files[routerConfigPath].replace(
        /base: process.env.BASE_URL,/,
        `base: window.__POWERED_BY_QIANKUN__ ? '/${projectName}' : '/',`
      )
    }

    // 替换 publicPath
    if (files[vueConfigPath]) {
      files[vueConfigPath] = files[vueConfigPath].replace(
        /TARGET_PUBLIC_PATH_TO_BE_REPLACED/,
        `//localhost:${port}`
      )
    }
  })
}
