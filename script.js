const icon = document.getElementById("dark");
// icon.addEventListener("click", getDark);

icon.onclick = function () {
   document.getElementById("header").classList.toggle("dark-mode");
};
// check how to change sass variables using this method. specifically the color variables.
