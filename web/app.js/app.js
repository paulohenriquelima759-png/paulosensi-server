window.usarGratis = function () {
  const s = document.getElementById("sensi");
  const d = document.getElementById("dpi");
  const b = document.getElementById("botao");

  if (!s || !d || !b) {
    alert("ERRO: faltou ID sensi/dpi/botao no HTML");
    return;
  }

  s.innerText = "95";
  d.innerText = "420";
  b.innerText = "55%";

  alert("Grátis aplicado ✅");
};
