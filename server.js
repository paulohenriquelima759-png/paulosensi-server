import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pasta onde está seu site (index.html, style.css, app.js)
const webDir = path.join(__dirname, "web");

// Serve arquivos estáticos: /style.css, /app.js, etc.
app.use(express.static(webDir));

// Abre o site no / (raiz)
app.get("/", (req, res) => {
  res.sendFile(path.join(webDir, "index.html"));
});

// Health check opcional
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log("Running on port", PORT);
});
