const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve a pasta web como arquivos estáticos
app.use("/web", express.static(path.join(__dirname, "web")));

const PORT = process.env.PORT || 3000;

// Home (só pra testar)
app.get("/", (req, res) => {
  res.send("Servidor do Paulo Sensi está ONLINE 🚀");
});

// Ping (pra testar)
app.get("/api/ping", (req, res) => {
  res.json({ ok: true });
});

// Seu app (abre o index.html)
app.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname, "web", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
