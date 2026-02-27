const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve a pasta /web (onde estão: index.html, app.js, data.js, style.css)
app.use(express.static(__dirname + "/web"));

// ✅ Página raiz só pra testar se tá online
app.get("/", (req, res) => {
  res.send("Servidor do Paulo Sensi está ONLINE 🚀");
});

// ✅ Ping do app (o app usa isso pra saber se tá LIVE)
app.get("/api/ping", (req, res) => {
  res.json({ ok: true });
});

// ✅ Abre o app em /app (vai carregar o index.html da pasta web)
app.get("/app", (req, res) => {
  res.sendFile(__dirname + "/web/index.html");
});

// ✅ Fallback: se acessar qualquer rota que não existe, mostra /app
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/web/index.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
