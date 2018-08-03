# webpack4.X

### 打包压缩
    添加mode:"production"
### 合并工具
    webpack-merge
### 支持动态import语法
    1. cnpm i -D babel-plugin-syntax-dynamic-import

    .babelrc配置
        "plugins": ["syntax-dynamic-import"]
    
    2. react-loadable
### 抽离css
    cnpm install --save-dev mini-css-extract-plugin

### 垫片 babel-polyfill
    作用 ：用于实现浏览器不支持原生功能的代码
    使用方式：
            1. main入口引入babel-polyfill
            2. webpack->entry 配置 babel-polyfill

