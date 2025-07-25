# Paper Man CRM - Backend

This is the backend service for the Paper Man CRM application. It provides RESTful APIs for managing user data, including creating, reading, updating, and deleting users.

## Features

- User management with MongoDB.
- Error handling and logging using Winston.
- API routes for CRUD operations.
- Environment configuration with `.env`.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the `.env` file.
4. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

- `POST /api/users` - Create a new user.
- `GET /api/users` - Get all users.
- `GET /api/users/:id` - Get a user by ID.
- `PUT /api/users/:id` - Update a user by ID.
- `DELETE /api/users/:id` - Delete a user by ID.

## Dependencies

- Express
- Mongoose
- Axios
- Winston
- Morgan
- Cors
- Dotenv

## Logs

Logs are stored in the `logs/` directory generated at runtime.

- `error.log` - Errors.
- `combined.log` - All logs.

# Testing

Run the file `test.js` in `src/utils` folder.
