const path = require('path'); // 引入path模块
function resolve(dir) {
    return path.resolve(__dirname, dir) //path.join(_dirname)设置绝对路径
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('img', resolve('src/assets/img'))
    }
};