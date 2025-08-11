🚗 DriveReady – MERN Car Hire & Booking System





DriveReady is a modern Fullstack MERN application for car rental and booking management.
Customers can search, book, and view vehicles, while admins can manage cars, bookings, and availability — all in one place.

✨ Features
🚘 For Users
Search cars by location, brand, category, or features

Real-time availability checking

Book cars with pickup & return dates

View car details, images, and specifications

Instant toast notifications for actions (e.g., “No cars available”)

🛠 For Admins
Add, edit, or remove cars

Upload car images using ImageKit API

Manage bookings and check availability

View customer booking history

🖼 Tech Stack
Layer	Technology
Frontend	React.js, Tailwind CSS, React Router, React Hot Toast
Backend	Node.js, Express.js
Database	MongoDB, Mongoose
Image Handling	ImageKit API
Testing & API	Postman API, Axios

📂 Project Structure
bash
Copy
Edit
DriveReady/
│
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Pages (Cars, Bookings, Admin)
│   │   ├── context/     # App-wide state
│   │   ├── assets/      # Icons & images
│   │   └── App.js       # Main app entry
│
├── server/          # Express backend
│   ├── models/      # Mongoose schemas
│   ├── routes/      # API routes
│   ├── controllers/ # Logic & handlers
│   └── server.js    # Server entry
│
└── README.md        # Documentation
⚙️ Installation
1️⃣ Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/DriveReady.git
cd DriveReady
2️⃣ Install dependencies

bash
Copy
Edit
# Server
cd server
npm install

# Client
cd ../client
npm install
3️⃣ Setup environment variables

📌 In /server/.env

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
📌 In /client/.env

env
Copy
Edit
REACT_APP_API_URL=http://localhost:3000
4️⃣ Run the app

bash
Copy
Edit
# Backend
cd server
npm start

# Frontend
cd ../client
npm start

🏠 Homepage

🚘 Cars Listing

📅 Booking Process

📌 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/bookings/check-availability	Check available cars
GET	/api/cars	Get all cars
POST	/api/cars	Add a new car (admin)
DELETE	/api/cars/:id	Delete a car (admin)

🚀 Future Plans
✅ Payment integration (Stripe / PayPal)

✅ User authentication (JWT)

✅ Booking cancellation system

✅ Multi-language support

👨‍💻 Author
Emmanuel Gema Kimani
Fullstack MERN Developer 

🔗 GitHub
📧 https://github.com/M-tech-cmd

🏷 License
Licensed under the MIT License – free to use and modify.
