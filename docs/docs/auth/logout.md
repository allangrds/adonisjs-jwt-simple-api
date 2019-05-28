## Logout - `auth/logout`
| Permission level  |   URL| Method  | Format   |  HTTP Status Code |
|---|---|---|---|---|
| User |  `auth/logout`|   `POST`|  `json` |  `200`, `400` |

#### Headers
|  Field | Content  |
|---|---|
|  Content-Type | application/json  |
|  Authorization | Bearer `{token}`  |


#### Response Content
|  Field | Type  |Detail   |
|---|---|---|
|  `message` | String  |  `Successfully logged out` |
