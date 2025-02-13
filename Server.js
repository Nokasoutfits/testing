const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookiePaser = require("cookie-parser");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const depositRoutes = require("./routes/deposit");
const accountRoutes = require("./routes/account");
const withdrawRoutes = require("./routes/withdraw");
const adminRoutes = require("./routes/adminRoutes");
const passwordRoutes = require("./routes/resetPassword");
// const referralRoutes = require("./routes/referralRoutes");

const app = express();

dotenv.config();
app.use(cors());
app.use(cookiePaser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/deposit", depositRoutes);
app.use("/api/withdraw", withdrawRoutes);
app.use("/api/password", passwordRoutes);
// app.use("/api/user", referralRoutes);

// AdminRoutes
app.use("/api/admin", adminRoutes);

// connectDB();
// __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server rununin on:", PORT);
  });
});
