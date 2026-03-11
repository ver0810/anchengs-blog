---
title: P.A.R.A.指南
author: 作者名字 (可选，默认取 config.ts 中的配置)
pubDatetime: 2026-03-11 10:56
modDatetime: 2026-03-11 10:56
slug: post-unique-slug
featured: true
draft: false
tags:
  - 知识管理
  - 笔记
description: P.A.R.A. 是 Projects, Areas, Resources, Archives的缩写，由Tiago Forte创建的知识管理方法论。
---

## 什么是 P.A.R.A.

P.A.R.A. 是 **Projects, Areas, Resources, Archives** 的缩写，由 [Tiago Forte](https://fortelabs.com) 创建的知识管理方法论。

| 分类 | 含义 | 示例 |
|------|------|------|
| **Projects** | 有明确目标和时间线的项目 | 论文写作、课程作业 |
| **Areas** | 需要持续维护的领域 | 学业、个人成长 |
| **Resources** | 感兴趣的主题和知识 | AI、编程、技术 |
| **Archives** | 不再活跃但有价值的资料 | 旧账号、已完成项目 |



## 文件夹结构

```
Obsidian_Notes/
├── 00_Media/          # 媒体文件（图片、PDF）
├── 01_Projects/       # 项目
│   └── Inbox/         # 收集箱
├── 02_Areas/          # 领域
│   └── Academic/      # 学业
├── 03_Resources/      # 资源
│   ├── AI/
│   ├── Programming/
│   └── Tools/
└── 04_Archives/      # 归档
    ├── Accounts/
    └── Credentials/
```

---

## 快速开始

### 1. 记笔记时

1. 打开 `01_Projects/Inbox` 或对应分类文件夹
2. 使用模板创建笔记（设置 → 核心插件 → 模板）
3. 完成后移动到正确位置

### 2. 链接笔记

使用 `[[笔记名称]]` 创建双向链接：

```markdown
这是 [[云计算与大数据]] 的笔记
```

### 3. 使用 MOC

MOC (Map of Content) 是主题索引：

```
00_AI.md
├── ML_and_DL/
│   ├── YOLOv8.md
│   └── SVM.md
└── RL/
    ├── PPO.md
    └── Transformers.md
```

---

## 最佳实践

### 命名规范

- ✅ `00_Index.md` / `00_AI.md` - 索引文件用 00 前缀
- ✅ `第一章-大数据概述.md` - 内容文件用描述性名称
- ❌ `note1.md` / `未命名.md`

### 链接习惯

- 写入新笔记时，链接到相关 MOC
- 在 MOC 中列出相关笔记
- 使用 `[[笔记名称|显示文本]]` 自定义显示

### 维护频率

| 频率 | 操作 |
|------|------|
| 每天 | 记笔记，使用 Inbox |
| 每周 | 整理 Inbox，添加链接 |
| 每月 | 检查 Archives，移动不活跃内容 |

---

## 进阶技巧

### 1. 标签使用

```markdown
#标签1 #标签2
```

### 2. 双向链接

Obsidian 自动追踪：
- 提及此笔记的笔记
- 此笔记链接到的笔记

### 3. 关系图谱

快捷键 `Ctrl+G` 打开关系图谱，直观查看笔记网络。

---

## 相关资源

- 原始 P.A.R.A.: [fortelabs.com/para](https://fortelabs.com/blog/para/)
- Obsidian 官网: [obsidian.md](https://obsidian.md)
- 本库索引: [[00_Index]]

---

*Created: {{date}}*
