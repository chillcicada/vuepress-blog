---
title: Software Design Competition - 4
date: 2024-02-19
category:
  - Diary
  - SDC
---

# 软设日志 - 4

<!-- more -->

## 2024-02-19

上午肝了一上午 srt 内容，许久没写 python，今天写会面向过程范式还有点不适，笑x，写起来和文档一样倒是轻松不少qaq。

下午大部分时间像个尸体一样待着，晚上打了一下寒假空洞骑士新档，一天就混完了。

用的 gpt web 框架疑似上游出了点问题，一直给我发邮件报 fail。

给网易云发的翻译今天已经第六天了还没受理，多少有点抽象了这新年（大过年的都不上班是吧）。

假期期间严重掉发，不知道是不是因为熬夜太多了qaq。

## 2024-02-21

今天重新写起了 ts，晚上遇到了一个极其面白い的情景。在此稍作描述：

vite(or esbuild) 中存在一个全局常量的概念（当然，在 webpack 等工具链中也存在类似的概念，但二者有所不同），具体可以用下面的代码来表示：

```ts
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify('v1.0.0'),
    __API_URL__: 'window.__backend_api_url',
  },
})
```

上面的代码中，define 内部定义的键值对就是全局常量，关于全局常量，vite 官网给出的说法如下：定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换。

换言之，在此处的常量实质上只是单纯的全局常量，确切的说，是只在构建阶段才被初始化的常量，从而，这些常量的声明将总是先于初始化（吐槽一嘴，声明也需要在 d.ts 文件中进行，`vite.config.ts` 中的工作严格讲是初始化的部分），当然，这并没什么，但问题处在 lint 过程上，eslint 需要静态分析常量，由此会抛出 no-undef 错误，这时有两个解决方案，要么因噎废食将 no-undef 设置为 off，要么使用的时候同时带上 global 声明，其中，后者又有三种解决思路，其一是每用这些全局常量的时候就加上相关声明，其二是手动将全局常量加到 eslintrc 的全局声明中，其三则是在每次预构建阶段生成对应的声明文件供 eslintrc 引用（类似于 auto-import），这三种方法各有利弊，写注释和手动添加都在增加工作量（尤其是第二种，声明一个全局常量居然要同时写入三个文件），而预构建必须一直打开构建功能（比如 vite 就提供了 build --watch 参数），这种做法会增大开销。

说来说去，造成这种麻烦的原因在于 eslintrc 必须是完全静态的（这也是推荐 `eslint.config.js`的原因），但本质上讲，我觉得这个做法（指 vite 的 define 功能）其实是不好的，一些用 webpack 的作者可能也知道类似的 define 功能，不过不同的是，webpack 同样的功能严格来说也包含了宏定义的功能，而这个功能在 vite 中被分给了环境常量，而环境常量本身是完全静态的，这就非常尴尬了，全局常量本身起不到动态宏的功能（尽管这也是 vite 将二者分开的原因之一）。对于单纯的 js 和 ts 项目而言，这种统一管理全局常量（而不是宏）的方案其实无可厚非（正如一些作者习惯于把常量统一放到 `constants.ts` 中），但对静态分析特别高的项目中，用 vite 提供的方法来定义全局常量不如把全局常量放到 `global.ts` 内部，以避免一些不必要的麻烦。
