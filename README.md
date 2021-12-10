# Simple REST API with Express, MongoDB & JWT Token

### How to use
Clone and run `npm init`.

### How to run
Just run `npm start` in terminal

### Endpoint

Get list film: `GET /api`

Create film : `POST /api/film`

Update film: `PUT /api/film/:id`

### Schema
```
{
    name: {
      type: String,
      required:true,
    },
    year: {
      type: Number,
      required:true,
    },
    director: {
      type: String,
      required:true,
    },
    rating: {
      type:Number,
      required:true
    }
  },
```
Enjoy it....
