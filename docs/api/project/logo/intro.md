---
sidebar_position: 1
---

# logo API
## 1. 请求方式
GET URL /logo

## 2. 请求参数
无

## 3. 返回参数
| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| code | number | 状态码 |
| message | string | 状态信息 |
| logo_copyright | string | logo图片地址 |
| logo_header | string | logo图片地址 |
| logo_footer | string | logo图片地址 |
| logo_sidebars | string | logo图片地址 |

## 4. 示例
```json
{
    "code": 0,
    "message": "success",
    "logo_copyright": "URL_ADDRESS.straair.com/logo_copyright.png",
    "logo_header": "URL_ADDRESS.straair.com/logo_header.png",
    "logo_footer": "URL_ADDRESS.straair.com/logo_footer.png",
    "logo_sidebars": "URL_ADDRESS.straair.com/logo_sidebars.png",
}
```