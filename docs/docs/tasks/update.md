## Update - `/tasks/{id}`


| Permission level  |   URL| Method  | Format   |  HTTP Status Code |
|---|---|---|---|---|
|  User |  `/tasks/{id}` |   `PATCH`|  `json` |  `202`, `400` |

#### Headers
|  Field | Content  |
|---|---|
|  Content-Type | application/json  |
|  Authorization | Bearer `{token}` |

#### Request Content

|  Field |  Type |  Required |  Detail |
|---|---|---|---|
| `title`  | String  | No  |  Task's title |
| `description`  |  String | No  |  Task's description |

#### Response Content
|  Field | Type  |Detail   |
|---|---|---|
|  `id`|  Integer |  Task's id |
|  `title`|  String |  Task's title |
|  `description`|  String |  Task's description |
|  `created_at`|  String |  Task's created_at |
|  `updated_at`|  String |  Task's updated_at |

#### Example

**Event**: User `PATCH` to `/tasks/12`  
**Header Content**:
```
Content-Type: application/json
Authorization: Bearer {token}
```
**Body Content**:
```
{
    "title": "This is a title",
    "description": "This is a descrip
}
```

**HTTP Status Code**: `202`  
**Response Content**:
```
{
	"title": "This is a title",
    "description": "This is a description",
    "updated_at": "2019-03-10 14:21:17",
    "created_at": "2019-03-11 14:21:17",
    "id": 12
}
```

#### Validations
**HTTP Status Code**: `400`  

| Content  | Detail  |
|---|---|
| `title`: The title may not be greater than 50 characters.| It titles can't have a string greater than 50 characters |
| `description`: The description may not be greater than 255 characters.| It descriptions can't have a string greater than 255 characters |
