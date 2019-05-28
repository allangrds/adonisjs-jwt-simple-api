## Login - `auth/login`

| Permission level  |   URL| Method  | Format   |  HTTP Status Code |
|---|---|---|---|---|
|  Anonymous |  `auth/login`|   `POST`|  `json` |  `200`, `400`, `401` |

#### Headers
|  Field | Content  |
|---|---|
|  Content-Type | application/json  |

#### Request Content

|  Field |  Type |  Required |  Detail |
|---|---|---|---|
| `email`  | Email field  | Yes  |  User's email |
| `password`  |  String | Yes  |  User's password |


#### Response Content
|  Field | Type  |Detail   |
|---|---|---|
|  `token_type` | String  |  `Bearer` |
|  `token`|  String | Token |
|  `expires_at`|  Integer | Datetime with exact time for the token expire |

#### Example

**Event**: Anonymous `POST` to `/auth/login/`  
**Header Content**:
```
Content-Type: application/json
```
**Body Content**: 
```
{
	"email": "jonhdoeqa@email.com",
	"password": "1234ABCD"
}

```
**HTTP Status Code**: `200`  
**Response Content**:
```
{
	"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZhMWZlY2E2OWFhMmVmZWQ3MzA4MmViNDk0NDMyOGEzNDEwMDEyYmIxOTQ1MDRlMTc2MDc5MWNjYjJkNWY3ZmFlNjllOGU5MzFhMjMzYmVjIn0.eyJhdWQiOiIxIiwianRpIjoiZmExZmVjYTY5YWEyZWZlZDczMDgyZWI0OTQ0MzI4YTM0MTAwMTJiYjE5NDUwNGUxNzYwNzkxY2NiMmQ1ZjdmYWU2OWU4ZTkzMWEyMzNiZWMiLCJpYXQiOjE1NTIyMjY0MjcsIm5iZiI6MTU1MjIyNjQyNywiZXhwIjoxNTgzODQ4ODI3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kRm4vXYuRHTmuGkMSCa1pqgnN1smKPKA6JR5PGwJxtZ7PCMQCLgf-3FTBUexDetZDITIDbX43Erd-Ul3l_gBiA1mtZWh9oE-_QFNTKPg71yHUeu6RmmMhmPrWgeZmJjubyXXtnICERnn1fEi0DC-20ZWROA7juPneUHOdp4Mofnp5z8UMcF2TjkHLRo_YOgxmGkS8uwtI4vaQqojdpZWAWy7egip5mgDglbxqmKjjuhn1GgkZsks-B166Hy-xX-F5EKnSzlnAD4TdUw7bgV52cnvuE8cIWPeHnpKAZjpfbX5xysRHeGLFWlTZbM25LOJIhpkVqFPYXy3R8S101MF-1r3K6cdHFUHisYYfYZnSo3X_g3qj1dxWfqH_awZopPFWn8IavK8l0p5SmpO31exh0kwLDsk-WCWYWN9ItTjhmXIn70hoD4fWMvpitD0sDjtaCPeaqK2E07FVWwclUiFlr1s0LY5RS0VIS_fCjaJysed9tgpOmjte5yhtKTD5xUAhwMghgVXfLqbYMX3hUfggW3ZtinUT_IKNKq8CkobW2GI5elRNtpOn0EMPLw5U63SxlBwXRn_WkyL4ihChEtu97V24p7LQOLMBpLkHDC1kIhnRDHPKDVajB11pk6MYlOGbHQeH0syg-F8n-Js5TpGX3N3rMxeMznZ00RE_5JtXS0",
    "token_type": "bearer",
    "expires_at": "3600"
}
```

#### Validations
**HTTP Status Code**: `400`  

| Content  | Detail  |
|---|---|
| `email`: The email field is required.  | It user must have a email |
| `password`: The password field is required.  | It user must have a password |
| `email`: The email may not be greater than 40 characters.| It emails can't have a string greater than 40 characters |
| `password`: The password may not be greater than 12 characters.| It passwords can't have a string greater than 12 characters |
