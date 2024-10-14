// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik untuk menghilangkan dimana saja
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// percobaan

// function searchFunction() {
//   let input = document.getElementById("searchInput").value.trim();
//   let resultDiv = document.getElementById("row");
//   let photos = document.querySelectorAll("#osis-img img");

//   // Sembunyikan semua foto terlebih dahulu
//   photos.forEach((photo) => {
//     photo.classList.add("");
//   });

//   if (input !== "") {
//     let photo = document.getElementById(input);
//     if (photo) {
//       photo.classList.remove("hidden");
//       resultDiv.innerHTML = "";
//     } else {
//       resultDiv.innerHTML = "Foto tidak ditemukan";
//     }
//   }
// }
