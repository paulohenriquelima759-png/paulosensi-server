const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// ✅ Serve a pasta web (onde fica index.html, app.js, style.css, data.js)
const WEB_DIR = path.join(__dirname, "web");
app.use(express.static(WEB_DIR));

// ✅ Ping do app
app.get("/api/ping", (req, res) => {
  res.json({ ok: true });
});

// ✅ Página inicial do site
app.get("/", (req, res) => {
  res.sendFile(path.join(WEB_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
}
