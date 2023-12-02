#### 📨 Reports / Posts

##### Get all posts

```http
  GET /api/reports
```

##### Get all reported posts

```http
  GET /api/reports/flagged
```

##### Update a post to be flagged for review

```http
  PUT /api/reports/flag_for_review
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `postId`  | `string` | **Required**. \_id of post to fetch |

##### Submit a report on a post

```http
  PUT /api/reports/submit_report
```

| Parameter         | Type            | Description                                                         |
| :---------------- | :-------------- | :------------------------------------------------------------------ |
| `updatedPostBody` | `IPostDocument` | **Required**. Object representing the updated post (i.e. form data) |
| `postId`          | `string`        | **Required**. \_id of post to update                                |
| `moderatedBy`     | `string`        | **Required**. \_id of moderator who submitted report                |

##### Auto Assign Unresolved Posts to Available Moderators

```http
  PUT /api/reports/auto_assign
```

#### 🧑🏽‍💻 Moderators

##### Get all moderators

```http
  GET /api/moderators/
```

##### Get all available moderators

```http
  GET /api/moderators/available
```

#### 🚧 If I Had More Time - Under Construction

##### Post an inappropriate post to Removed collection

```http
  POST /api/reports/removed
```

##### Delete an inappropriate post from main Posts collection so it can be hidden from users

```http
  DELETE /api/reports/
```
