## Delete - `/tasks/{id}`


| Permission level  |   URL| Method  | Format   |  HTTP Status Code |
|---|---|---|---|---|
|  User |  `/tasks/{id}` |   `DELETE`|  `json` |  `204` `404` |

#### Headers
|  Field | Content  |
|---|---|
|  Content-Type | application/json  |
|  Authorization | Bearer `{token}` |

#### Example

**Event**: User `DELETE` to `/tasks/12`  
**Header Content**:
```
Content-Type: application/json
Authorization: Bearer {token}
```
**Body Content**: `None`

**HTTP Status Code**: `204`  
**Response Content**: `None`

#### Validations
**HTTP Status Code**: `404`  

| Content  | Detail  |
|---|---|
| `id`: The task does not exists  | The task was not found in the database |
