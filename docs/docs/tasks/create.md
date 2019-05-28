## Create - `/tasks`


| Permission level  |   URL| Method  | Format   |  HTTP Status Code |
|---|---|---|---|---|
|  User |  `/tasks` |   `POST`, `GET`|  `json` |  `201`, `400` |

#### Headers
|  Field | Content  |
|---|---|
|  Content-Type | application/json  |
|  Authorization | Bearer `{token}` |

#### Request Content

|  Field |  Type |  Required |  Detail |
|---|---|---|---|
| `title`  | String  | Yes  |  Task's title |
| `description`  |  String | Yes  |  Task's description |

#### Response Content
|  Field | Type  |Detail   |
|---|---|---|
|  `id`|  Integer |  Task's id |
|  `title`|  String |  Task's title |
|  `description`|  String |  Task's description |
|  `created_at`|  String |  Task's created_at |
|  `updated_at`|  String |  Task's updated_at |

#### Example

**Event**: User `POST` to `/tasks`  
**Header Content**:
```
Content-Type: application/json
Authorization: Bearer {token}
```
**Body Content**:
```
{
    "title": "This is a title",
    "description": "This is a description",
}
```

**HTTP Status Code**: `201`  
**Response Content**:
```
{
	"title": "This is a title",
    "description": "This is a description",
    "updated_at": "2019-03-10 14:21:17",
    "created_at": "2019-03-10 14:21:17",
    "id": 12
}
```

#### Validations
**HTTP Status Code**: `400`  

| Content  | Detail  |
|---|---|
| `title`: The title field is required.  | It task must have a title |
| `description`: The description field is required.  | It task must have a description |
| `title`: The title may not be greater than 50 characters.| It titles can't have a string greater than 50 characters |
| `description`: The description may not be greater than 255 characters.| It descriptions can't have a string greater than 255 characters |
