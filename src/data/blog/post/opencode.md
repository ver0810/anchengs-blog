---
title: "OpenCode 完全指南：终端中的 AI 编程助手"
pubDatetime: 2025-11-06T00:00:00Z
author: "ancheng"
description: "学习如何使用 OpenCode，这款开源的 AI 编程助手，在终端中提升开发效率"
tags: ["AI", "开发工具", "终端", "编程助手"]
featured: true
draft: false
---

在当今的软件开发世界中，AI 编程助手已经成为提升开发效率的重要工具。而 OpenCode 作为一款完全开源、专为终端设计的 AI 编程代理，正在改变开发者与代码交互的方式。

## 什么是 OpenCode？

OpenCode 是一个开源的 AI 编程助手，专为终端环境设计。它具有以下核心特点：

- **原生终端界面**：响应式、可主题化的终端 UI
- **LSP 支持**：自动为 LLM 加载合适的语言服务器协议
- **多会话支持**：在同一项目上并行启动多个代理
- **分享链接**：分享会话链接供参考或调试
- **多模型支持**：支持 75+ LLM 提供商，包括本地模型
- **隐私优先**：不存储任何代码或上下文数据

## 安装 OpenCode

### 通过安装脚本（推荐）

最简单的安装方式：

```bash
curl -fsSL https://opencode.ai/install | bash
```

### 通过包管理器

**Node.js 生态：**
```bash
# npm
npm install -g opencode-ai

# Bun
bun install -g opencode-ai

# pnpm
pnpm install -g opencode-ai

# Yarn
yarn global add opencode-ai
```

**系统包管理器：**
```bash
# Homebrew (macOS 和 Linux)
brew install opencode

# Paru (Arch Linux)
paru -S opencode-bin

# Chocolatey (Windows)
choco install opencode

# Scoop (Windows)
scoop bucket add extras
scoop install extras/opencode
```

## 配置 OpenCode

OpenCode 支持多种 LLM 提供商。推荐使用 OpenCode Zen，这是经过团队测试和验证的精选模型列表。

### 使用 OpenCode Zen

1. 运行登录命令：
```bash
opencode auth login
```

2. 选择 "opencode" 提供商

3. 访问 [opencode.ai/auth](https://opencode.ai/auth) 注册并获取 API 密钥

4. 将 API 密钥粘贴到终端中

### 其他提供商

你也可以选择其他 LLM 提供商，如 OpenAI、Anthropic Claude 等。完整的提供商列表请参考官方文档。

## 初始化项目

配置完成后，导航到你的项目目录：

```bash
cd /path/to/your/project
```

启动 OpenCode：

```bash
opencode
```

在 OpenCode 中运行初始化命令：

```
/init
```

这会分析你的项目并创建一个 `AGENTS.md` 文件。**建议将此文件提交到 Git**，它帮助 OpenCode 理解项目结构和编码模式。

## 核心功能使用

### 1. 询问代码问题

你可以让 OpenCode 解释代码库的任何部分：

```
How is authentication handled in @packages/functions/src/api/index.ts
```

使用 `@` 符号可以模糊搜索项目中的文件。

### 2. 添加新功能

#### 创建计划模式

按 **Tab** 键切换到计划模式（右下角会显示指示器）：

```
<TAB>
```

描述你想要的功能：

```
当用户删除笔记时，我们希望在数据库中标记为已删除。
然后创建一个显示最近删除笔记的界面。
用户可以从此界面恢复笔记或永久删除。
```

#### 迭代优化计划

你可以提供反馈或添加更多细节：

```
我们希望使用之前使用过的设计来设计这个新界面。
[Image #1] 查看这张图片并作为参考。
```

**提示**：可以通过拖拽图片到终端来添加图像。

#### 实施功能

满意计划后，再次按 **Tab** 键切换回构建模式：

```
<TAB>
```

让 OpenCode 实施更改：

```
听起来不错！开始实施更改。
```

### 3. 直接代码修改

对于简单的更改，可以直接要求 OpenCode 实施：

```
我们需要为 /settings 路由添加身份验证。
查看 @packages/functions/src/notes.ts 中如何处理，
并在 @packages/functions/src/settings.ts 中实现相同逻辑。
```

### 4. 撤销和重做

如果对更改不满意，可以使用 `/undo` 命令：

```
/undo
```

这会撤销最近的更改并显示原始消息。你可以多次运行 `/undo` 来撤销多个更改。

要重做更改，使用 `/redo` 命令：

```
/redo
```

## 高级特性

### 分享会话

使用 `/share` 命令可以创建当前对话的分享链接：

```
/share
```

这会将链接复制到剪贴板。**注意**：对话默认不会分享，需要手动操作。

### 自定义配置

OpenCode 提供丰富的自定义选项：

- **主题**：选择适合你偏好的主题
- **快捷键**：自定义键盘绑定
- **代码格式化**：配置代码格式化工具
- **自定义命令**：创建自定义命令
- **权限设置**：配置操作权限

## 实用技巧

### 1. 提供充分上下文

与 OpenCode 交互时，提供详细的上下文和示例，就像与团队中的初级开发者交流一样。

### 2. 使用计划模式

对于复杂功能，先使用计划模式让 OpenCode 制定实施计划，确认无误后再执行。

### 3. 利用文件引用

使用 `@` 符号快速引用项目文件，提高沟通效率。

### 4. 版本控制集成

定期提交 `AGENTS.md` 文件到 Git，保持项目配置的一致性。

### 5. 多会话工作

利用多会话功能在不同任务上并行工作，提高效率。

## 隐私和安全

OpenCode 采用隐私优先的设计：

- 不存储任何代码或上下文数据
- 支持在敏感环境中使用
- 开源透明，代码可审计

## 社区和支持

OpenCode 拥有活跃的开源社区：

- **GitHub**：30,000+ stars，250+ 贡献者
- **月活用户**：300,000+ 开发者
- **Discord 社区**：实时交流和支持

## 总结

OpenCode 为开发者提供了一个强大、灵活且隐私友好的 AI 编程助手。通过其直观的终端界面和丰富的功能，它可以显著提升开发效率，无论是代码理解、功能开发还是日常维护。

随着 AI 技术的不断发展，OpenCode 这样的工具正在重新定义我们与代码交互的方式。现在就开始使用 OpenCode，体验下一代 AI 辅助编程的魅力吧！

---

**相关链接：**
- [OpenCode 官网](https://opencode.ai)
- [GitHub 仓库](https://github.com/sst/opencode)
- [官方文档](https://opencode.ai/docs)
- [Discord 社区](https://opencode.ai/discord)
