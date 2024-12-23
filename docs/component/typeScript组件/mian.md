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
```typescript
import { logoApi } from '@/assets/typeScript/mian'
logoApi();


