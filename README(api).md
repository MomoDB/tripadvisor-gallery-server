## Server API

### Get TripAdivsor Gallery info
  * GET `/tripAdvisor/:id/gallery`

**Path Parameters:**
  * `id` gallery id

**Success Status Code:** `200`

**Returns:** JSON

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
          "date_created": "String",
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
          "date_created": "String",
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
          "date_created": "String",
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
