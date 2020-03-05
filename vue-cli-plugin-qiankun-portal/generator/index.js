module.exports = (api) => {
  api.render('./template')

  api.extendPackage({
    dependencies:{
      "qiankun": "^1.4.3",
      "vue-router":'^3.1.5',
      "less": "^3.10.3",
      "less-loader": "^5.0.0",
      "whatwg-fetch": "^3.0.0"
    }
  })
}
