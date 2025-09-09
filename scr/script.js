document.querySelectorAll(".Question").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
