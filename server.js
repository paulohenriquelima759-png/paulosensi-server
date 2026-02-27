const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// 👇 ISSO AQUI FAZ O SITE ABRIR
app.use(express.static(path.join(__dirname, "web")));

// ROTA PING
app.get("/api/ping", (req, res) => {
  res.json({ ok: true });
});

// SE ABRIR O SITE, MANDA O INDEX.HTML
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "web", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
