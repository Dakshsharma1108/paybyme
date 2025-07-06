# PayByMe

A modern, responsive React web application for fast, secure, and reliable payments.

## Features
- Beautiful animated landing page
- 3D logo and interactive UI
- User sign-up and login with validation
- Responsive design for all devices
- React Router navigation
- Custom loading screens and error handling

## Project Structure
```
paybyme/
├── backend/
│   ├── server.js         # Main Express server
│   ├── users.json        # (Optional) User data storage
│   └── ...               # Other backend files
├── frontend/
│   ├── public/           # Static assets (e.g., vite.svg)
│   ├── src/
│   │   ├── assets/       # Images and SVGs
│   │   ├── components/   # React components (login, sign-up, home)
│   │   ├── App.jsx       # Main App component
│   │   ├── App.css       # App-wide styles
│   │   ├── index.css     # Global styles
│   │   └── main.jsx      # App entry point
│   ├── package.json      # Frontend dependencies and scripts
│   ├── vite.config.js    # Vite configuration
│   └── README.md         # Frontend documentation
└── README.md             # Root project documentation
```

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn

### Installation
1. Open a terminal in the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```sh
npm run dev
# or
yarn dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Customization
- Edit components in `src/components/`
- Update styles in `src/App.css` or `src/index.css`
- Change assets in `src/assets/` or `public/`

## Backend Overview

The backend provides RESTful API endpoints for user authentication and account management. It is designed to work seamlessly with the PayByMe frontend.

### Features
- User registration (`/signup`)
- User login (`/login`)
- Password validation and error handling
- CORS support for frontend-backend communication
- Simple in-memory or file-based user storage (customize as needed)

### Backend Setup
1. Open a terminal in the `backend` directory:
   ```sh
   cd ../backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```
   The backend will run on [http://localhost:3000](http://localhost:3000) by default.

### Example Backend Functionality
The backend is built with Node.js and Express. It provides `/signup` and `/login` endpoints for user authentication, storing user data in a simple file or in-memory array. You can extend it to use a real database and add more features as needed.

> **Note:** This backend is for demo purposes. For production, use hashed passwords, environment variables, and a real database.

### Security Improvements
- **Password Hashing:** User passwords should be securely hashed before storage. Use a library like `bcrypt` to hash passwords during signup and to verify them during login.
- **JWT Authentication:** On successful login, the backend should generate a JSON Web Token (JWT) and return it to the client. The frontend can store this token (e.g., in localStorage) and send it with requests to protected endpoints.

#### Example (Conceptual)
- On signup: Hash the password with `bcrypt` before saving.
- On login: Compare the provided password with the stored hash using `bcrypt.compare`.
- On successful login: Generate a JWT (e.g., with `jsonwebtoken`), send it to the client, and require it for protected routes.

> **Note:** For production, always use environment variables for secrets and never store plain text passwords.

## License
MIT

---
*PayByMe — Secure payments at your fingertips.