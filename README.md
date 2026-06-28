# AirBnb Backend

A RESTful hotel management API built with Express 5, TypeScript, Sequelize, and MySQL.

## Tech Stack

- **Runtime** — Node.js
- **Framework** — Express 5
- **Language** — TypeScript
- **ORM** — Sequelize 6 with MySQL2
- **Validation** — Zod
- **Logging** — Winston + daily-rotate-file
- **Dev** — Nodemon, ts-node

## Project Structure

```
src/
├── config/          # App config, logger, DB config
├── controllers/     # HTTP request handlers
├── db/
│   ├── migrations/  # Sequelize migrations
│   └── models/      # Sequelize models
├── dto/             # Internal TypeScript types for layer boundaries
├── middlewares/     # Error handling, correlation ID
├── repositories/    # DB access layer
├── routers/
│   └── v1/          # Versioned route definitions
├── service/         # Business logic layer
├── utils/           # AppError classes, helpers
└── validators/      # Zod schemas + validation middleware
```

## Setup

1. Clone the repo

```bash
git clone https://github.com/vaibhav449/airBnb.git
cd airBnb
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=airbnb
```

4. Run database migrations

```bash
npx sequelize-cli db:migrate
```

5. Start the development server

```bash
npm run dev
```

## API Endpoints

### Hotels

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v1/hotels/create` | Create a new hotel |
| `GET` | `/api/v1/hotels/:id` | Get a hotel by ID |
| `GET` | `/api/v1/hotels/health` | Health check |

### Create Hotel — Request Body

```json
{
  "name": "Grand Palace",
  "location": "Mumbai",
  "address": "123 Marine Drive",
  "ratings": 4.5,
  "rating_count": 120
}
```

## Database Schema

**hotels**

| Column | Type | Notes |
|--------|------|-------|
| id | INT | Auto-increment primary key |
| name | VARCHAR(255) | Required |
| address | VARCHAR(255) | Required |
| location | VARCHAR(255) | Required |
| ratings | DECIMAL(3,2) | Default 0 |
| rating_count | INT | Default 0 |
| created_at | TIMESTAMP | Auto-set |
| updated_at | TIMESTAMP | Auto-updated |

## Error Handling

All errors flow through centralized Express error middleware:

- `AppError` subclasses (`NotFoundError`, `BadRequestError`, etc.) return their own `statusCode`
- Unhandled errors fall through to `genericErrorHandler` returning `500`
