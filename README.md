# element-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

------

搭建工程时的基础选项配置:
======

## 1 Check the features needed for your project: 检查你的项目所需的特性:

(*) Babel //转码器, 由于用脚手架搭建的工程中用到了很多ES6语法, 但浏览前不能很好的支持ES6, 所以需要配置Babel选项, 可以将ES6代码转为ES5代码, 从而在现有环境执行.

( ) TypeScript // 使用TypeScript语法规则, TypeScript是一个JavaScript的超集, 包含并扩展了JavaScript的语法, 需要被编译输出为JavaScript在浏览器运行

( ) Progressive Web App (PWA) Support// 渐进式Web应用程序, 使用多种技术来增强web app的功能, 让网站的性能得以提升, 关于PWA: https://baike.baidu.com/item/PWA/22378897?fr=aladdin

(*) Router // vue-router(vue路由)

(*) Vuex // vuex(vue的状态管理模式)

(*) CSS Pre-processors // CSS 预处理器(如: less, sass, stylus)

(*) Linter / Formatter // 代码风格检查, 语法检查和格式化(如: ESlint)

( ) Unit Testing // 单元测试(unit tests)

( ) E2E Testing // e2e(end to end) 测试

## 2 Use class-style component syntax? (Y/n): 是否使用class风格的样式语法(选择TypeScript后的配置)

## 3 Use Babel alongside TypeScript for auto-detected polyfills? (Y/n) : 是否使用class风格的组件语法(选择TypeScript后的配置)

## 4 Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): 是否使用history模式, 否则使用hash模式, 当然也可以在vue工程中的router/index.jx中进行路由的自定义配置, 两种模式直观的的区别是hash模式会在浏览器地址栏显示/#/, 而history模式不会; 实质上的不同是hash模式中hash值虽然会出现在url中, 但不会被包括在http请求中, 因此当hash值改变的时候并不会造成页面的重载, 而history模式是利用HTML5 History Interface中新增的pushState()和replaceState()方法, 当然需要特定的浏览器支持, 有时候还需要服务器的配合, 这两个方法作用于浏览器的历史记录栈, 在当前已有的go, back, forword的基础之上, 他们提供了对历史记录的修改功能, 只是当他们执行修改时, 虽然改变了url但浏览器并不会立即向后端发送请求(?), 因此可以说hash和history都是浏览器本身的特性, vue-router只是利用了这两个特性来实现路由导航

## 5 Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):选择css预处理模式

( )Sass/SCSS (with dart-sass)

( )Sass/SCSS (with node-sass)

( )Less

( )Stylus

## 6 Pick a linter / formatter config: (Use arrow keys): 选择ECMAScript语法检测规范; ESlint: (https://eslint.org/docs/user-guide/configuring); 在vue搭建的工程中书写代码时会遇到一些语法错误, 像变量定义了但未使用, 模块注册了但没使用等类似的错误, 都可以在选择语法检查规范后进行自定义配置, 当然也可以配置比较恶心的强制代码以分号(;)结尾, 否则报错

( )TSLint

( )ESLint with error prevention only

( )ESLint + Airbnb config

( )ESLint + Standard config

( )ESLint + Prettier

## 7 Pick additional lint features: (Press to select, to toggle all, to invert selection): 选择附加检查特性

( ) Lint on save //保存时检查呢

( ) Lint and fix on commit //提交时检查

## 8 Pick a unit testing solution: (Use arrow keys) : 单元测试方式

( )Mocha + Chai

( )Jest

## 9 Pick a E2E testing solution: (Use arrow keys) : e2e测试方式

( )Cypress (Chrome only)

( )Nightwatch (Selenium-based)

## 10 Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys): 选择以上配置信息存放位置

( )In dedicated config files //建立单独文件进行保存, 会在vue工程中创建 .eslintrc.js文件(存储ESlint语法检查配置).browserslistrc文件(存储浏览器兼容配置, 根据宿主浏览器环境来只能添加css前缀, js的polyfill垫片等, 来兼容低版本浏览器, 避免不必要的兼容代码, 以提高代码编译质量)

( )In package.json //并入到package.json文件中, 会在vue工程中的package.json中增加eslintConfig配置项和browserslist配置项, 语法和作用同上

## 11 this as a preset for future projects? (y/N): 是否保存当前预设, 下次构建无需再次配置, 一般不保存预设


> 在vue工程中还会出现.git和.gitignore文件, .git是本地仓库, 为代码托管作准配, .gitignore顾名思义在托管代码时忽略一些文件, 

> 在工程中下载一些第三方包是执行npm i xxx -save是为了在package.json中的dependencies中写入依赖, 而npm i xxx -dve是为了在package.json中的devDependencies中写入依赖, 即使直接执行npm i xxx也可以, 因为工程会把当前工程所用的的包自动写入依赖


一级标题
===============
二级标题
---------------
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
段落格式(末尾加两个空格)  
段落格式(使用空行)

段落格式 段落格式
段落格式

*斜体文本*

_斜体文本_

**粗体文本**

__粗体文本__

***斜体粗体文本***

___斜体粗体文本___

~~删除线文本~~

<u>下划线文本</u>

创建脚注 [^脚注].

[^脚注]: hhhhhhhh注释

***
* * *
******
---
- - - 
------

* 1
* 2
* 3

+ 1
+ 2
+ 3

- 1
- 2
- 3

1. 1
    * 1
    * 2
    * 3
3. 2
    1. 1
    2. 2
3. 3
    - 1
    - 2
    - 3

------

> 引用区块 引用区块
>> 引用区块  引用区块
>>> 引用区块 引用区块

------

>引用区块
> 1. 列表
> 2. 列表
> 3. 列表
> - 列表
> - 列表

------

- 列表
    > 引用区块

    > 引用区块(末尾加两个空格)  
    > 引用区块

------

`function()` 函数

    代码区块

```

------

console.log('hello world')




```

------

[百度一下, 你就知道](http://www.baidu.com)

----

<http://www.baidu.com>

------

用变量做网址链接, 并在文档最后给变量赋值 [百度一下, 你就知道][1]

<img src="src/assets/img/avatar.jpg" width="80%"/>

------

使用 <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>Del</kbd> 重启电脑

------

### 登录接口返回信息

| code | msg | timestamp | token | user | pass | phone |
| - | :- | -: | :-: | - | - | - |
| 0 | 登录成功 | 登录成功时间点 | 用户token | 用户名 | 密码 | 手机号 |
| 1 | 密码错误 | - | - | - | - | - |
| 2 | 用户名不存在 | - | - | - | - | - |
| 3 | 验证码错误 | - | - | - | - | - |

------

### 注册接口返回信息

| code | msg |
| - | :- |
| 0 | 用户名已存在 |
| 1 | 注册成功 |

------


[1]: http://www.baidu.com
