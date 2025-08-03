const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const cookieParserMiddleware = require("cookie-parser");
const connect = require("./db/connectdb");
const socketHandler = require("./socket/socket.js"); // <- your socket setup file

// Load environment variables
require("dotenv").config();
const port = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Middleware
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParserMiddleware());

// Routes
const authRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const notificationRoutes = require("./routes/notificationRoute");
const bookingRoutes = require("./routes/bookingRoute");
const timesheetRoutes = require("./routes/timeRoutes.js");

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/timesheets", timesheetRoutes);

// Create HTTP server and bind socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

// Attach socket instance to Express for use in routes/controllers
app.set("io", io);

// Initialize socket logic
socketHandler(io);

// Start server
server.listen(port, () => {
  console.log(`🚀 Server is listening on port ${port}`);
  connect();
});
