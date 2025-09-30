# Excel Analytics Platform

## Project Overview
This is a full-stack Excel Analytics Platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to upload Excel files, analyze data, and generate interactive 2D and 3D charts from the data. The project supports user authentication, dynamic chart generation, downloadable charts, and optional AI-based summary insights.

## Features
- User and Admin authentication with JWT
- Excel file upload and parsing (supports .xls and .xlsx formats)
- Save data and upload history in MongoDB
- Dynamic selection of X and Y axes for charts
- Support for 2D charts with Chart.js and 3D charts with Three.js
- Download charts as PNG or PDF
- Responsive and modern UI built with React
- Optional integration with AI APIs for insights and summary generation

## Project Structure
excel-analytics-platform/
├── backend/ # Backend API with Express and MongoDB
├── frontend/ # React frontend application
├── .env # Environment variables
├── README.md # This documentation file

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- MongoDB instance (local or cloud)
- Git (for cloning the repository)

### Installation

Clone the repository:git clone https://github.com/CipherGriffin07/zidio_p1.git
cd zidio_p1

#### Backend Setup
cd excel-analytics-platform/backend
npm install
Create a `.env` file and add your MongoDB URI and JWT secret:
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

Start the backend server:
npm start

#### Frontend Setup
cd ../frontend
npm install
npm start
The React app will start at `http://localhost:3000`.

## Usage
- Register or log in as a user/admin.
- Upload Excel files through the frontend interface.
- View and interact with generated charts.
- Download charts or request AI-generated summaries.

## License
This project is licensed under the MIT License.

## Contact
For questions or contributions, please contact `snehalideyofficial@gmail.com` or open an issue on GitHub.

---
