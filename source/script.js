document.querySelectorAll(".Question").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

//Rotas
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href="/bio"]').forEach((link) => {
    link.setAttribute("target", "_blank");
  });
  document.querySelectorAll('a[href="/privacy-policy"]').forEach((link) => {
    link.setAttribute("target", "_blank");
  });
});
