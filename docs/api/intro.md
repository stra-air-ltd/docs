---
sidebar_position: 1
---

# API架构介绍

## 1. 项目简介
本项目使用Hapi.js + TypeScript + MySQL 开发。

## 目录结构

```
- src/
  - routes/
    - index.ts
    - users.ts
    - products.ts
  - controllers/
    - usersController.ts
    - productsController.ts
  - services/
    - usersService.ts
    - productsService.ts
  - models/
    - user.ts
    - product.ts
  - plugins/
    - authPlugin.ts
    - loggingPlugin.ts
  - config/
    - config.ts
  - server.ts
- test/
  - routes/
    - users.test.ts
    - products.test.ts
  - controllers/
    - usersController.test.ts
    - productsController.test.ts
  - services/
    - usersService.test.ts
    - productsService.test.ts
- package.json
- tsconfig.json
- .gitignore
``