# Getting Started

## 1. Environment Variables

IN `.env` file in the project root , add the following variables:

* **MONGO_URI** – Your MongoDB connection string.
* **JWT_SECRET** – A secure secret key used to sign JWT tokens. Replace it with any strong, random string of your choice.

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 2. Authentication API Endpoints

### Sign Up

**Endpoint**

```http
POST /user/signup
```

**Request Body**

```json
{
  "username": "your_username",
  "email": "your_email@example.com",
  "password": "your_password"
}
```

---

### Login

**Endpoint**

```http
POST /user/login
```

**Request Body**

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

On successful login, the server will set an **HttpOnly JWT cookie** for authentication.

---

### Logout

**Endpoint**

```http
POST /user/logout
```

This endpoint clears the authentication cookie and logs the user out.

3. Running the Project

Install the dependencies:

npm install

Start the development server:

npm start

Note: The default start script uses Nodemon for development:

"start": "nodemon server.js"

Before deploying your application, it's recommended to update the script to use Node.js instead:

"start": "node server.js"

No other changes are required for deployment.

4. Configure CORS

Before running the application, update the CORS configuration in app.js.

Replace the origin value with the URL of your frontend application (or localhost during development).

Example:

app.use(
  cors({
    origin: [
      "http://localhost:5173", // Development
      "https://your-frontend-domain.com" // Production
    ],
    credentials: true,
  })
);

Note: Only the origins listed here will be allowed to access your backend. Be sure to update this list with your own frontend URL before running or deploying the application.
