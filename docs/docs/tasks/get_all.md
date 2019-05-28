## Get All - `/tasks`


| Permission level  |   URL| Method  | Format   |  HTTP Status Code |
|---|---|---|---|---|
|  User |  `/tasks` |   `GET`|  `json` |  `200` `400` |

#### Headers
|  Field | Content  |
|---|---|
|  Content-Type | application/json  |
|  Authorization | Bearer `{token}` |

#### Query String
|  Field | Allow Value  |
|---|---|
|  title| Anyone  |
|  description | Anyone |
|  order_by | title, -title, description, -description |

#### Example 1 (Simple GET)

**Event**: User `GET` to `/tasks`  
**Header Content**: `None`
**Body Content**: `None`

**HTTP Status Code**: `200`  
**Response Content**:
```
{
    "current_page": 1,
    "data": [
        {
            "id": 15,
            "title": "Título 312345",
            "description": "Descrição da task 123456789",
            "created_at": "2019-03-22 15:37:12",
            "updated_at": "2019-03-22 15:37:12"
        },
        {
            "id": 14,
            "title": "Título 312345",
            "description": "Descrição da task 12345678",
            "created_at": "2019-03-22 15:37:12",
            "updated_at": "2019-03-22 15:37:12"
        },
        {
            "id": 13,
            "title": "Título 312345",
            "description": "Descrição da task 1234567",
            "created_at": "2019-03-22 15:37:11",
            "updated_at": "2019-03-22 15:37:11"
        },
        {
            "id": 12,
            "title": "Título 312345",
            "description": "Descrição da task 123456",
            "created_at": "2019-03-22 15:37:10",
            "updated_at": "2019-03-22 15:37:10"
        },
        {
            "id": 11,
            "title": "Título 312345",
            "description": "Descrição da task 12345",
            "created_at": "2019-03-22 15:37:09",
            "updated_at": "2019-03-22 15:37:09"
        },
        {
            "id": 10,
            "title": "Título 312345",
            "description": "Descrição da task 1234",
            "created_at": "2019-03-22 15:37:08",
            "updated_at": "2019-03-22 15:37:08"
        },
        {
            "id": 9,
            "title": "Título 312345",
            "description": "Descrição da task 123",
            "created_at": "2019-03-22 15:37:07",
            "updated_at": "2019-03-22 15:37:07"
        },
        {
            "id": 8,
            "title": "Título 312345",
            "description": "Descrição da task 12",
            "created_at": "2019-03-22 15:37:06",
            "updated_at": "2019-03-22 15:37:06"
        },
        {
            "id": 7,
            "title": "Título 312345",
            "description": "Descrição da task 1",
            "created_at": "2019-03-22 15:37:05",
            "updated_at": "2019-03-22 15:37:05"
        },
        {
            "id": 6,
            "title": "Título 312345",
            "description": "Descrição da task",
            "created_at": "2019-03-22 15:37:02",
            "updated_at": "2019-03-22 15:37:02"
        }
    ],
    "first_page_url": "http://localhost/tasks?page=1",
    "from": 1,
    "last_page": 2,
    "last_page_url": "http://localhost/tasks?page=2",
    "next_page_url": "http://localhost/tasks?page=2",
    "path": "http://localhost/tasks",
    "per_page": 10,
    "prev_page_url": null,
    "to": 10,
    "total": 15
}
```

#### Example 2 (Filter by title)

**Event**: User `GET` to `/tasks?title=Título 312345`  
**Header Content**: `None`
**Body Content**: `None`

**HTTP Status Code**: `200`  
**Response Content**:
```
{
    "current_page": 1,
    "data": [
        {
            "id": 15,
            "title": "Título 312345",
            "description": "Descrição da task 123456789",
            "created_at": "2019-03-22 15:37:12",
            "updated_at": "2019-03-22 15:37:12"
        },
        {
            "id": 14,
            "title": "Título 312345",
            "description": "Descrição da task 12345678",
            "created_at": "2019-03-22 15:37:12",
            "updated_at": "2019-03-22 15:37:12"
        },
        {
            "id": 13,
            "title": "Título 312345",
            "description": "Descrição da task 1234567",
            "created_at": "2019-03-22 15:37:11",
            "updated_at": "2019-03-22 15:37:11"
        },
        {
            "id": 12,
            "title": "Título 312345",
            "description": "Descrição da task 123456",
            "created_at": "2019-03-22 15:37:10",
            "updated_at": "2019-03-22 15:37:10"
        },
        {
            "id": 11,
            "title": "Título 312345",
            "description": "Descrição da task 12345",
            "created_at": "2019-03-22 15:37:09",
            "updated_at": "2019-03-22 15:37:09"
        },
        {
            "id": 10,
            "title": "Título 312345",
            "description": "Descrição da task 1234",
            "created_at": "2019-03-22 15:37:08",
            "updated_at": "2019-03-22 15:37:08"
        },
        {
            "id": 9,
            "title": "Título 312345",
            "description": "Descrição da task 123",
            "created_at": "2019-03-22 15:37:07",
            "updated_at": "2019-03-22 15:37:07"
        },
        {
            "id": 8,
            "title": "Título 312345",
            "description": "Descrição da task 12",
            "created_at": "2019-03-22 15:37:06",
            "updated_at": "2019-03-22 15:37:06"
        },
        {
            "id": 7,
            "title": "Título 312345",
            "description": "Descrição da task 1",
            "created_at": "2019-03-22 15:37:05",
            "updated_at": "2019-03-22 15:37:05"
        },
        {
            "id": 6,
            "title": "Título 312345",
            "description": "Descrição da task",
            "created_at": "2019-03-22 15:37:02",
            "updated_at": "2019-03-22 15:37:02"
        }
    ],
    "first_page_url": "http://localhost/tasks?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://localhost/tasks?page=1",
    "next_page_url": null,
    "path": "http://localhost/tasks",
    "per_page": 10,
    "prev_page_url": null,
    "to": 10,
    "total": 10
}
```

#### Example 3 (Filter by description)

**Event**: User `GET` to `/tasks?description=Descrição da task 12345678` 
**Header Content**: `None`
**Body Content**: `None`

**HTTP Status Code**: `200`  
**Response Content**:
```
{
    "current_page": 1,
    "data": [
        {
            "id": 14,
            "title": "Título 312345",
            "description": "Descrição da task 12345678",
            "created_at": "2019-03-22 15:37:12",
            "updated_at": "2019-03-22 15:37:12"
        }
    ],
    "first_page_url": "http://localhost/tasks?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://localhost/tasks?page=1",
    "next_page_url": null,
    "path": "http://localhost/tasks",
    "per_page": 10,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}
```

#### Example 3 (Order by ASC title)

**Event**: User `GET` to `/tasks?order_by=title` 
**Header Content**: `None`
**Body Content**: `None`

**HTTP Status Code**: `200`  
**Response Content**:
```
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "title": "Título 3",
            "description": "Descrição da task",
            "created_at": "2019-03-22 15:36:51",
            "updated_at": "2019-03-22 15:36:51"
        },
        {
            "id": 2,
            "title": "Título 31",
            "description": "Descrição da task",
            "created_at": "2019-03-22 15:36:58",
            "updated_at": "2019-03-22 15:36:58"
        },
        {
            "id": 3,
            "title": "Título 312",
            "description": "Descrição da task",
            "created_at": "2019-03-22 15:36:59",
            "updated_at": "2019-03-22 15:36:59"
        },
        {
            "id": 4,
            "title": "Título 3123",
            "description": "Descrição da task",
            "created_at": "2019-03-22 15:37:00",
            "updated_at": "2019-03-22 15:37:00"
        },
        {
            "id": 5,
            "title": "Título 31234",
            "description": "Descrição da task",
            "created_at": "2019-03-22 15:37:01",
            "updated_at": "2019-03-22 15:37:01"
        },
        {
            "id": 6,
            "title": "Título 312345",
            "description": "Descrição da task",
            "created_at": "2019-03-22 15:37:02",
            "updated_at": "2019-03-22 15:37:02"
        },
        {
            "id": 7,
            "title": "Título 312345",
            "description": "Descrição da task 1",
            "created_at": "2019-03-22 15:37:05",
            "updated_at": "2019-03-22 15:37:05"
        },
        {
            "id": 8,
            "title": "Título 312345",
            "description": "Descrição da task 12",
            "created_at": "2019-03-22 15:37:06",
            "updated_at": "2019-03-22 15:37:06"
        },
        {
            "id": 9,
            "title": "Título 312345",
            "description": "Descrição da task 123",
            "created_at": "2019-03-22 15:37:07",
            "updated_at": "2019-03-22 15:37:07"
        },
        {
            "id": 10,
            "title": "Título 312345",
            "description": "Descrição da task 1234",
            "created_at": "2019-03-22 15:37:08",
            "updated_at": "2019-03-22 15:37:08"
        }
    ],
    "first_page_url": "http://localhost/tasks?page=1",
    "from": 1,
    "last_page": 2,
    "last_page_url": "http://localhost/tasks?page=2",
    "next_page_url": "http://localhost/tasks?page=2",
    "path": "http://localhost/tasks",
    "per_page": 10,
    "prev_page_url": null,
    "to": 10,
    "total": 15
}
```

#### Example 4 (Order by DESC title)

**Event**: User `GET` to `/tasks?order_by=-title` 
**Header Content**: `None`
**Body Content**: `None`

**HTTP Status Code**: `200`  
**Response Content**:
```
{
    "current_page": 1,
    "data": [
        {
            "id": 6,
            "title": "Título 312345",
            "description": "Descrição da task",
            "created_at": "2019-03-22 15:37:02",
            "updated_at": "2019-03-22 15:37:02"
        },
        {
            "id": 7,
            "title": "Título 312345",
            "description": "Descrição da task 1",
            "created_at": "2019-03-22 15:37:05",
            "updated_at": "2019-03-22 15:37:05"
        },
        {
            "id": 8,
            "title": "Título 312345",
            "description": "Descrição da task 12",
            "created_at": "2019-03-22 15:37:06",
            "updated_at": "2019-03-22 15:37:06"
        },
        {
            "id": 9,
            "title": "Título 312345",
            "description": "Descrição da task 123",
            "created_at": "2019-03-22 15:37:07",
            "updated_at": "2019-03-22 15:37:07"
        },
        {
            "id": 10,
            "title": "Título 312345",
            "description": "Descrição da task 1234",
            "created_at": "2019-03-22 15:37:08",
            "updated_at": "2019-03-22 15:37:08"
        },
        {
            "id": 11,
            "title": "Título 312345",
            "description": "Descrição da task 12345",
            "created_at": "2019-03-22 15:37:09",
            "updated_at": "2019-03-22 15:37:09"
        },
        {
            "id": 12,
            "title": "Título 312345",
            "description": "Descrição da task 123456",
            "created_at": "2019-03-22 15:37:10",
            "updated_at": "2019-03-22 15:37:10"
        },
        {
            "id": 13,
            "title": "Título 312345",
            "description": "Descrição da task 1234567",
            "created_at": "2019-03-22 15:37:11",
            "updated_at": "2019-03-22 15:37:11"
        },
        {
            "id": 14,
            "title": "Título 312345",
            "description": "Descrição da task 12345678",
            "created_at": "2019-03-22 15:37:12",
            "updated_at": "2019-03-22 15:37:12"
        },
        {
            "id": 15,
            "title": "Título 312345",
            "description": "Descrição da task 123456789",
            "created_at": "2019-03-22 15:37:12",
            "updated_at": "2019-03-22 15:37:12"
        }
    ],
    "first_page_url": "http://localhost/tasks?page=1",
    "from": 1,
    "last_page": 2,
    "last_page_url": "http://localhost/tasks?page=2",
    "next_page_url": "http://localhost/tasks?page=2",
    "path": "http://localhost/tasks",
    "per_page": 10,
    "prev_page_url": null,
    "to": 10,
    "total": 15
}
```

#### Validations
**HTTP Status Code**: `400`  

| Content  | Detail  |
|---|---|
| `order_by`: The selected order by is invalid.  | It only allows title, -title, description, -description |
