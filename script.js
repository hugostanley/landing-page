// const btn = document.getElementById("moon");

// btn.addEventListener("click", getDark);

// function getDark() {
//    if ((document.getElementById("header").style.backgroundColor = "rgb(249, 187, 68)")) {
//       document.getElementById("header").style.backgroundColor = "black";
//       document.getElementById("moon").tex;
//    } else {
//       document.getElementById("header").style.backgroundColor = "rgb(249, 187, 68)";
//    }
// }

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener("click", () => {
   navLinks.classList.toggle("active");
});
