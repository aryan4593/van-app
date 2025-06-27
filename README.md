# Van App

A modern van rental web application built with React, featuring authentication, host and user dashboards, and dynamic routing. This project demonstrates advanced React Router usage, data loading strategies, and a clean, responsive UI.

## Features
- Browse available vans with detailed information
- User authentication (trial user provided below)
- Host dashboard with income, reviews, and van management
- Nested and protected routes
- Data loading with loaders and deferred data
- Error boundaries and loading states
- Responsive design

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd van-app-main
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Trial User
- **Email:** abc@xyz.com
- **Password:** p123

## Project Structure
```
van-app-main/
  src/
    components/      # Reusable UI components
    pages/           # Route-based pages
    assets/          # Images and static assets
    api.js           # API and data fetching logic
    utils.js         # Utility functions
    server.js        # Mock server (if used)
  public/            # Static files
  package.json       # Project metadata and scripts
  vite.config.js     # Vite configuration
```

## Main Packages Used
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

