# 集成 webpack 基本配置的包

## 特点

1. webpack@5
2. ts
3. eslint
4. sass
5. 支持自定义 webpack 和 babel 配置
6. 项目中scss变量（Constant）文件添加到该包中

> npm i @datareachable/webpack -D

## 如何使用这个包

1. 检查项目的 package.json 和这个包里重复的依赖，可以将它从项目里删除

2. 将项目里的 package.json 更改如下

    - ```javascript
      "scripts": {
      	"start": "datareachable dev",
      	"build": "datareachable build",
      	"build-dev": "datareachable build-dev",
      }
      ```
    - npm run start  **开发模式** 的环境变量 `process.env.NODE_ENV`的值为`development`
    - build  **生产模式** 的环境变量 `process.env.NODE_ENV`的值为`development_dev`
    - build-dev  **生产模式的测试版** 的环境变量 `process.env.NODE_ENV`的值为`test`
    - 以上所有均可在`https://github.com/szkj-web-he/webpack.git`这个仓库查看

3. 支持自定义配置 在 package.json 下创建 datareachable.config.js 可以合并配置

4. 版本控制 App\_`版本`(eg:App_v2),它可以自动识别 V2 并作为公共路径;

5. 集成了 Roboto 字体
   使用方法: font-family: "Roboto";
   也可以使用 class => '.font-roboto'

6. 集成了 Alibaba PuHuiTi 字体
   使用方法： font-family: "alipuhui";
   也可以使用 class => '.font-puhui'
