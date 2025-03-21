import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";
import helmet from "helmet";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// ✅ Fix: Update CORS Options
const corsOptions = {
  origin: ["https://spacex-bela.onrender.com"], // Only allow frontend domain
  credentials: true,
};

mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.log("❌ MongoDB connection failed", error);
  }
};
import path from "path";
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.use(express.json());
app.use(express.static("public"));
app.use(cors(corsOptions));
app.use(cookieParser());

// ✅ Fix: CSP Policy (Allow Fonts & Static Assets)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://cdnjs.cloudflare.com"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "data:", "https://spacex-bela.onrender.com"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'", process.env.MONGO_URI], // Allow MongoDB connection
      },
    },
  })
);

// ✅ Fix: Default Route to Prevent 404 Error
app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(port, () => {
  connect();
  console.log(`✅ Server listening on port ${port}`);
});
