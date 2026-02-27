const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "web")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "web", "index.html"));
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Servidor do Paulo Sensi ONLINE 🚀");
});
