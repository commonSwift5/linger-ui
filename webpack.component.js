const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
// webpack  打包配置
const glob = require('glob')
const list = {}
async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  for (const file of files) {
    var component = file.split(/[/.]/)[2]
    list[component] = `./${file}`
  }
}

makeList('components/lib', list)
module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js', // card.umd.js
    path: path.resolve(__dirname, 'dist'), // 平成绝对路径
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  }
}
