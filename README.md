# Amazon Scraper

A simple web scraper application that fetches product information from Amazon based on a search keyword. The backend uses Express and Axios, while the frontend is built using Vite and modern CSS for a responsive design.

## Prerequisites

Before starting, you will need:

- [Bun](https://bun.sh) for package management and running the server.
- [Node.js](https://nodejs.org) installed on your system (Node.js version 20 or later recommended).
- A web browser to test the frontend.

## Setup

- Clone this repository:
```bash
git clone <repository-url>
```

- Open the project folder:
```bash
cd amazon-scrape
```

## Backend Setup

1. **Clone the repository and navigate to the backend folder:**

   - Go to the backend folder:
   ```bash
   cd api
   ```

2. **Install backend dependencies:**
   To install all the necessary dependencies for the backend:
   ```bash
   bun install
   ```

3. **Run the backend server:**
   Start the backend server by running:
   ```bash
   bun dev
   ```
   The backend will be running at [http://localhost:3000](http://localhost:3000).

## Frontend Setup

1. **Navigate to the frontend directory:**
   If you are not already in the frontend directory, go there by running:
   ```bash
   cd ..
   cd frontend
   ```

2. **Install frontend dependencies:**
   To install all the necessary dependencies for the frontend:
   ```bash
   yarn install
   ```

3. **Run the frontend:**
   Start the frontend server by running:
   ```bash
   yarn dev
   ```
   The frontend will be running at [http://localhost:5173](http://localhost:5173).

4. **Test the application:**
   - Open the frontend in your browser.
   - Enter a product keyword in the input field and click the "Scrape Amazon" button.
   - The products should appear below the search field, displaying titles, ratings, and review counts.

## How It Works

### Backend:
- The backend is an Express server that makes requests to Amazon’s search page using Axios and scrapes product data with `jsdom`.
- The scraped product data is then sent to the frontend as a JSON response.

### Frontend:
- The frontend consists of a simple input form where you can enter a search keyword.
- When you submit the form, a fetch request is made to the backend API, which returns the product list.
- The results are displayed in a responsive grid layout.