const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", function(e) {
  e.stopPropagation();
  menu.classList.toggle("open");
});
document.addEventListener("click", function(event){
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove("open");
  }
});
menuToggle.addEventListener("keydown", function(e){
  if (e.key === "Enter" || e.key === " ") {
    menu.classList.toggle("open");
  }
});