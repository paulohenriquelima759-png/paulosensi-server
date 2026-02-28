// PAULSENSIAPP - app.js

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function usarGratis() {
  // Valores grátis (exemplo)
  setText("sensi", "95");
  setText("dpi", "420");
  setText("botao", "55%");

  // Só pra confirmar que clicou
  console.log("usarGratis OK");
}

// Se der erro no JS, ele mostra um alerta (pra você ver o problema)
window.addEventListener("error", (e) => {
  alert("ERRO no app.js: " + (e.message || "desconhecido"));
});
