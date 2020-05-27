## Server API

### Get TripAdivsor Gallery info
  * GET `/tripAdvisor/:id/gallery`

**Path Parameters:**
  * `id` gallery id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "gallery_id": "Number",
      "activity": {
        "name": "String", // add ID or use unique for mongo
        "location": "String"
      },
      "photos": [
        {
          "link": "String",
          "alt": "String",
          "user": "String",
          "user_contributions": "Number",
          "date_created": "Date", //type could be String or Date. Change it to be YYYY-MM-DD
          "review_title": "String",
          "review_description": "String",
          "review_stars": "Number",
          "review_helpful_score": "Number"
        },
        {
          "link": "String",
          "alt": "String",
          "user": "String",
          "user_contributions": "Number",
          "date_created": "Date", //type could be String or Date
          "review_title": "String",
          "review_description": "String",
          "review_stars": "Number",
          "review_helpful_score": "Number"
        }
      ]
    }
```

### Add TripAdivsor Gallery
  * POST `/api/gallery`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "activity": {
        "name": "String",
        "location": "String"
      },
      "photos": [
        {
          "link": "String",
          "alt": "String",
          "user": "String",
          "user_contributions": "Number",
          "date_created": "Date",
          "review_title": "String",
          "review_description": "String",
          "review_stars": "Number",
          "review_helpful_score": "Number"
        }
      ]
    }
```


### Update TripAdivsor Gallery info
  * PATCH `/tripAdvisor/:id/gallery`

**Path Parameters:**
  * `id` gallery id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "gallery_id": "Number",
      "activity": {
        "name": "String",
        "location": "String"
      },
      "photos": [
        {
          "link": "String",
          "alt": "String",
          "user": "String",
          "user_contributions": "Number",
          "date_created": "Date",
          "review_title": "String",
          "review_description": "String",
          "review_stars": "Number",
          "review_helpful_score": "Number"
        }
      ]
    }
```

### Delete TripAdivsor Gallery
  * DELETE `/tripAdvisor/:id/gallery`

**Path Parameters:**
  * `id` gallery id

**Success Status Code:** `204`
