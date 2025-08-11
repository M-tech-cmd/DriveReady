import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js"; // Add this import
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// Initialize Express App
const app = express();

// Connect to database
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use('/api/user', userRouter); // Add this route middleware
app.use('/api/owner', ownerRouter)
app.use('/api/bookings', bookingRouter)

app.get('/', (req, res) => res.send("Server is running"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));