var path = require('path');

module.exports = {  //这是commonJS的导出语法
    entry: './app/index.js', //entry就是我们的入口文件，可以有多个入口文件,是webpack打包的输入对象
    output: { //output即为webpack打包的输出对象
        filename: './dist/bundle.js',//filename为输出文件名
    },
}