## Create - `/users`


| Permission level  |   URL| Method  | Format   |  HTTP Status Code |
|---|---|---|---|---|
|  User |  `/users` |   `POST` |  `json` |  `201`, `400`, `404` |

#### Headers
|  Field | Content  |
|---|---|
|  Content-Type | application/json  |
|  Authorization | Bearer `{token}` |

#### Request Content

|  Field |  Type |  Required |  Detail |
|---|---|---|---|
| `name`  | String  | Yes  |  User's name |
| `email`  |  String | Yes  |  User's email |
| `password`  |  String | Yes  |  User's password |

#### Response Content
|  Field | Type  |Detail   |
|---|---|---|
|  `access_token`|  String |  User's access token |
|  `token_type`|  String |  User's token type authentication |
|  `expires_in`|  String |  Time for a session to expire |

#### Example

**Event**: User `POST` to `/users`  
**Header Content**:
```
Content-Type: application/json
Authorization: Bearer {token}
```
**Body Content**:
```
{
    "name": "Allan",
    "email": "allan@gmail.com",
    "password": "123",
}
```

**HTTP Status Code**: `201`  
**Response Content**:
```
{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3VzZXJzIiwiaWF0IjoxNTUzMjY1Njc4LCJleHAiOjE1NTMyNjkyNzgsIm5iZiI6MTU1MzI2NTY3OCwianRpIjoieEhERW9kdm5EMG9yMHhsaCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.oaXs71UCoRr6N5B9DxLOffU0kKZMMbMw0EAgVVQqUfg",
    "token_type": "jwt",
    "expires_in": 3600
}
```

#### Validations
**HTTP Status Code**: `400`  

| Content  | Detail  |
|---|---|
| `name`: The name field is required.  | It user must have a name |
| `email`: The email field is required.  | It user must have a email |
| `password`: The password field is required.  | It user must have a password |
| `name`: The name may not be greater than 40 characters.| It names can't have a string greater than 40 characters |
| `email`: The email may not be greater than 40 characters.| It emails can't have a string greater than 40 characters |
| `password`: The password may not be greater than 12 characters.| It passwords can't have a string greater than 12 characters |
