# piaopiao

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

遇到错误：
1.端口我改为了8023，结果在跨域的时候用的8080，报错我找了很久
2.margin:0 auto;让轮播图居中，当时我页面切换到了iPhone X，显示的轮播图不是全屏，后来才知道是iPhone5，物理宽度320
3.经常说什么什么未定义，原因是我components单词写错了
4.刚写的有关scss的要重启服务器后才生效，比如要用到scss的刚定义的类名为page