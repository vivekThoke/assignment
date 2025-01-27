# Assignment Repository

Welcome to the **Assignment Repository**! This project contains both frontend and backend components. The frontend is built with React, and the backend is developed using Flask. This guide will help you set up and run the project locally.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **Python** (v3.8 or higher)
- **npm** (Node Package Manager) or **yarn**
- **pip** (Python Package Installer)

---

## Frontend Setup

### Steps to Install and Run the Frontend

1. Navigate to the `Frontend` directory:

   ```bash
   cd Frontend
   ```v

2. Install the required dependencies:

   ```bash
   npm install
   ```
   Or if you prefer **yarn**:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   ```
   Or with **yarn**:

   ```bash
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the running frontend.

---

## Backend Setup

### Steps to Install and Run the Backend

1. Navigate to the `Backend` directory:

   ```bash
   cd Backend
   ```

2. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

3. Start the Flask development server:

   ```bash
   flask run
   ```

4. The backend will be running at `http://localhost:5000`.

---

## Project Structure

```plaintext
assignment/
├── Frontend/        # React frontend code
│   ├── public/      # Public assets
│   ├── src/         # React components and logic
│   └── package.json # Node.js dependencies
├── Backend/         # Flask backend code
│   ├── app.py       # Main Flask application
│   ├── requirements.txt # Python dependencies
└── README.md        # Documentation
```

---

## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are installed correctly.
2. Check the logs for errors and resolve them.
3. For additional help, raise an issue in this repository.

