---
title: Proxy 配置
date: 2024-01-15
---

> 仅收录本人用到的 proxy 配置，其他的自行查找。
>
> 部分文件配置后需要重启。其中，配置文件地址以我个人电脑为蓝本，具体地址应自行在个人电脑上查询。

# Node.js

## npm, pnpm

## yarn

配置文件地址：`~/.yarnrc`

## fnm

## bun

# Vim

## vim-plug

```vim
let g:plug_download_proxy = 'your_proxy_url:your-proxy:port'
```

配置文件地址：`~/.vimrc`

# Python

## pip

# Rust

## cargo

配置文件地址：`~/.cargo/config.toml`

# Windows

## winget

## chocolatey

```bash
# Administrator
choco config set proxy <your_proxy_url:port>
```

配置文件地址：`C:\ProgramData\chocolatey\config\chocolatey.config`

## scoop

> 目前我用的最多的 windows 包管理器

```bash
scoop config proxy <your_proxy_url:port>
```

配置文件地址: `~/.config/scoop/config.json`

# PowerShell

> 目前没有 powershell 的具体配置文件(依照官方说法，powershell 没有配置，用到的 `$PROFILE` 为 windows terminal 配置)。不过，使用 invoke-webRequest 等方法时，有 -Proxy 参数供临时使用。
