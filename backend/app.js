const express = require("express");
const path = require("path");

const app = express();
const cors = require("cors");
const cookieParserMiddleware = require("cookie-parser");
const connect = require("./db/connectdb");
const authRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const notificationRoutes = require("./routes/notificationRoute");
const bookingRoutes = require("./routes/bookingRoute");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParserMiddleware());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(port, () => {
  console.log(`Server is listening to the Port : ${port}`);
  connect();
});
