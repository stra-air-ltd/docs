---
title: mian组件
sidebar: auto
---

# mian组件

## 1. 组件列表
| 组件名 | 说明 | 
| ----- | ------- |
| updareTheme | 模式切换组件 |
| logoApi | logo组件 |

## 2. 组件使用

### 2.1. 模式切换组件
```typescript
import { updateTheme } from '@/assets/typeScript/mian'
updateTheme(darkMode: boolean, writeCache?: boolean, mode?: string);
```
### 2.2. logo组件
#### 参数
| 参数名 | 类型 | 说明 |
| ----- | ------- | ------- |
| logoName | string | logo名称 |

| 值(string)| 说明 |
| ------- | ------- |
| logo_copyright | 版权信息logo |
| logo_header | 头部logo |
| logo_footer  | 底部logo |
| logo_sidebars | 侧边栏logo |



#### 示例
```typescript
import { logoApi } from '@/assets/typeScript/mian'
logoApi(logoName: string);
```