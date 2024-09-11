# Next Dashboard Frontend

**next-dashboard-fe** is a Next.js-based dashboard application that visualizes data using multiple charting libraries like Chart.js and Lightweight-charts. The project is styled with Tailwind CSS and utilizes TypeScript for type safety.

## Table of Contents
1. [Setup Instructions](#setup-instructions)
2. [Libraries and Tools Used](#libraries-and-tools-used)
3. [Approach and Thought Process](#approach-and-thought-process)
4. [Available Scripts](#available-scripts)

## Setup Instructions

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v14.x or later)
- **npm**, **yarn**, **pnpm**, or **bun** as the package manager.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Janithbimsara/next-dashboard-fe.git
   cd next-dashboard-fe
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production
To create an optimized production build:
```bash
npm run build
```
This will generate the production-ready files in the `.next` directory.

### Running in Production
To run the app in production:
```bash
npm run start
```

## Libraries and Tools Used

This project uses the following key libraries and tools:
- **Next.js**: For building the React-based dashboard with server-side rendering.
- **React**: Frontend library for building user interfaces.
- **Chart.js**: For creating various types of charts.
- **react-chartjs-2**: React wrapper for Chart.js to easily integrate charts.
- **Lightweight-charts**: For building financial charts.
- **Tailwind CSS**: Utility-first CSS framework for styling the app.
- **Axios**: To handle HTTP requests and API calls.
- **TypeScript**: To add type safety throughout the application.

For development purposes:
- **ESLint**: To maintain code quality.
- **TypeScript**: For type checking and error detection.

## Approach and Thought Process

### Purpose
The objective of this project is to build a responsive and user-friendly dashboard capable of rendering various types of data visualizations. The charts include bar charts, line charts, candlestick charts, and pie charts.

### Architecture and Design
- **Next.js** was chosen for its server-side rendering capabilities, which improves performance and SEO for the dashboard.
- The **component-based structure** in React allows for modular and reusable code, which is especially useful when managing different chart components.
- **TypeScript** adds type safety, minimizing runtime errors and improving developer experience.
- **Tailwind CSS** was selected to ensure a clean and responsive layout without the need for writing extensive custom CSS.
  
### Visualization Approach
- **Chart.js** was chosen for its flexibility and ease of integration with React through `react-chartjs-2`. This library supports various chart types that can be customized extensively.
- **Lightweight-charts** was added specifically for rendering high-performance financial charts, such as candlestick charts.
  
### Data Management
The dashboard uses **Axios** to make HTTP requests and fetch data for visualizations. This keeps the codebase organized and allows for easy integration with APIs or external data sources.

## Available Scripts

Here are the available npm/yarn commands for this project:

- **dev**: Starts the development server.
- **build**: Builds the project for production.
- **start**: Runs the application in production mode.
- **lint**: Runs ESLint to check for code quality issues.