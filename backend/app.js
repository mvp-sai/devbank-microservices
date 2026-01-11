const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "DevBank Backend is running" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", service: "Backend" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

