---
title: Software Design Competition - 3
date: 2024-02-14
category:
  - Diary
  - SDC
---

# 软设日志 - 3

> nothing to say

<!-- more -->

## 2024-02-12

稍微调整了一下项目结构，现在主体长这样：

```txt
Projects\cTodo
├── cTodo
├── cTodo-docs
└── cTodo-server
```

在之后由于原 cTodo 项目太过复杂了，于是把框架重构了一些，又变成了这样：

```txt
Projects\cTodo
├── cTodo
├── cTodo-docs
├── cTodo-next (原 cTodo)
└── cTodo-server
```

## 2024-02-13

客户端没什么活整了，跑去写了一会服务端和文档，说实话这个程序理论上是完全不需要服务器的，但出于尝试（~~刷分~~）的目的，写了一个 socket 小服务器用来收集错误信息、用户反馈和发布版本，后面一想，既然发布版本，不如再套个 web，于是这服务器套前端的操作就来了x，然后又一想，不妨整个像 docker 抑或 vitest 一样，interface / ui 选项放到命令行参数里面，于是稀里糊涂地开写 cTodo-server 了，鉴定为 ws + clap + Yew 的奇妙组合x。文档那边没什么好说的，用的 vitepress，轻车熟路就配好了x，不过老实说，真让人纠结的是这东西单拿出来也不是，放主目录里也不是。

## 2024-02-14

cTodo-server 的奇妙组合好不容易把 clap（命令行部分），ws（通信部分）和 Yew（前端部分）外加零散的 真·后端 都写到了一起，然后就不出意外出意外了，原则上 Yew 用的是 Trunk 来编译和启动，target 有时 wasm，这就很尴尬了，与其他的完全不交叉，当初像把这几个耦合的我简直是添柴x，倒也不是无解，目前暂定的方案之一就是把前端部分抽离出去从 mod 变成 crate，方案二就粗暴很多，直接砍掉这部分qaq。

## 2024-02-15

这个 wxt 作者太勤勉了，下午提的 features，晚上就给我端上来了。搞得我都不好意思不用这个框架了。

## 2024-02-16

大概还有两周时间初审，把静态资源稍微整理了一下 initial commit 了一下，大抵也是满足一下填 github 绿格格的快乐aww，初审过会把完整的 commit 上去。

## 2024-02-17

没干正事x，纯写文档权当放送x。

---

后面更新不勤的原因一是个人的身体状况欠佳，没有强烈的记录的想法，另一个原因就是项目的进度一直在打转，倒不是说没干什么，只是细化的工作一直不想做，抽空做的都是规范处理，状态管理，单元测试，组件调试之类与项目核心功能无关的事情。

其实没什么好讲的，上学期期末做的项目时间花了，但败在了选择上，这种失落感让我一直没有继续做下去的想法，于是直接把很多新玩意用在了这个项目上，也就是上面提到的那些，尝试新东西的过程是快乐的，讨厌重复。

14 号团建瘟疫公司的时候我就一直在吐槽，从没觉得写前端快乐过qaq，干完今年之后也不想再写全栈了，全栈写的心累qaq。

<span class="center-text">「上不去，下不来，没办法，卡在这里了。」</span>

<iframe width="100%" height="450px" src="https://www.youtube.com/embed/6hfulyqlj_E?si=ym8_znWHxt1zS2-L" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

寄吧，不知道为啥键盘有时会莫名其妙切换 ctrl 键（明明没有 toggle），由于我使用 ctrl 键切换语言，真的很恼火，也不知道是那个键出了问题md。（有人手指肌无力设置键盘高位触发，我不说是谁qaq）
