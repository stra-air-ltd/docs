---
sidebar_position: 2
---
# config配置
## 1. 配置文件

### 1.1. 配置文件路径

```bash
├─config.ts
└─config.js
```

### 1.2. 配置文件说明

关于 config 一般来说我们推荐你使用 `config.ts` 文件，因为它支持 TypeScript 的类型检查，这样可以大大提高代码的可读性和可维护性。
以下是 config 文件的配置项以及一个符合标准的配置文件示例：
```typescript
// config.ts
export function config() {
  return {
    api : {
        url : "https://api.starair.ltd/"
        // 你的api服务器地址
    }   
  }
}
```

### 1.3. 配置文件使用
```typescript
// main.ts
import { config } from '@../config'
```