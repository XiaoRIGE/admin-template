## how to use

1. Install all packages

   ```bash
   yarn

   # npm install [for npm]
   ```

2. Run development server

   ```bash
   yarn serve

   # npm run serve [for npm]
   ```

3. Generate build files for deployment

   ```bash
   yarn build

   # npm run build [for npm]
   ```

## 简介

项目使用 Materio 作为基础模板，再此基础上进行功能迭代

### 包管理工具

- 建议使用 yarn 作为包管理工具

### 主要用到的库

- [√] vue2（2.7.10） + vue-router + vuex + Vuetify + mdi/js（materialdesign icons）+SASS
- [×] http 请求:axios(后期需要调试时再做新增)
- [√] ui 库: Vuetify
- [×] 提交规范:git cz commitizen
- [×] 版本更改历史: changelog
- [×] 代码检查:eslint,格式化:prettier.提交之前检查与修复：lint-staged
- [×] webpack 插件:style-resources-loader（全局 less）webpack-bundle-analyzer（包分析工具） splitChunks（代码分离）

### Lint 配置

- [×] eslint
- [×] prettier
- [×] style Lint
- [×] eslint

### 样式配置

> 均通过在 vue-cli 中配置 webpack 实现.

- [x] 自动注入全局样式
- [x] 配置全局 less 变量
- [x] 支持自定义 UI 库的主题颜色

### 网络请求

- [x] 基于 axios 封装脱离具体业务逻辑的网络请求,支持编写脱离浏览器环境的测试用例.(跟业务无关)
- [x] 基于具体业务逻辑再次封装网络请求 (跟业务相关,此项需要依据具体后台应用接口编写)

### 数据状态管理

- [x] 建立应用数据状态管理
- [x] 编写更加简易读取的 mutation 方法,并完善 type 【新增】
- [x] 支持多个模块,以及自动装载模块
- [x] 支持持久化

### 配置

- [x] 配置 webpack,分离开发/测试/生产环境配置.
- [x] 添加 webpack 常用插件,优化打包配置.
- [x] 根据环境配置 vue-cli 环境变量(环境相关)
- [x] 增加编辑器配置

### 开发工具

- [x] eslint 代码检查,配置 prettier 格式化工具,使检查规则和格式化规则一致
- [x] 新增提交规范 git cz commitizen,统一代码提交规范

### 文档

- [x] 使用 TYPEDOC 搭建项目文档应用
- [x] 在提交规范的基础上,增加版本更改历史,自动生成 changelog
- [x] 配置 http-server 启动文档应用

## What's Included 📦

- Dashboard
- Account Settings
- Pages
  - Login
  - Register
  - Error
- User Interface
  - Typography
  - Icons
  - Basic Cards
  - Tables
  - Form Layouts

## Documentation 📜

Check GitHub [Wiki](https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free/wiki) of this repo

## Browser Support 🖥️

- Materio Vuetify VueJS Free Admin Template is built to work best in the latest desktop and mobile and tablet browsers

- Chrome (latest)
- FireFox (latest)
- Safari (latest)
- Opera (latest)

## Credits 🙏

- [Vuetify](https://vuetifyjs.com/) ui 插件
- [Material Design Icons（@mdi/js）](https://materialdesignicons.com/) icon 图标
- [ApexCharts](https://apexcharts.com/) 图表

## Looking For Premium Admin Templates ?? 👀

[ThemeSelection](https://themeselection.com) provides Selected high quality, modern design, professional and easy-to-use Free Admin Dashboard Template, HTML Themes and UI Kits to create your applications faster!.

If you are looking for more free templates like Materio - Vuetify VueJS Free Admin Template, please visit [ThemeSelection](https://themeselection.com).

## Useful Links 🔗

- More products from [ThemeSelection](https://themeselection.com)
- Freebies from [ThemeSelection](https://themeselection.com/products/category/download-free-admin-templates/)
- [Blog](https://themeselection.com/blog/)
