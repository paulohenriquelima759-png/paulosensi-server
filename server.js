const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const WEB_DIR = path.join(__dirname, "web");
app.use(express.static(WEB_DIR));

app.get("/api/ping", (req, res) => {
  res.json({ ok: true });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(WEB_DIR, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
