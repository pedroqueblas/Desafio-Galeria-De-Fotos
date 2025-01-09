const photos = [
  { id: 1, title: "Luffy", url: "./src/img/luffy.jpg" },
  { id: 2, title: "Sanji", url: "./src/img/sanji.jpg" },
  { id: 3, title: "Zoro", url: "./src/img/zoro.jpg" },
  { id: 4, title: "Kirito", url: "./src/img/kirito.jpg" },
  { id: 5, title: "Asuna", url: "./src/img/asuna.jpg" },
  { id: 6, title: "Eugeo", url: "./src/img/eugeo.jpg" },
  { id: 7, title: "Rayquaza", url: "./src/img/rayquaza.jpg" },
  { id: 8, title: "Pikachu", url: "./src/img/pikachu.jpg" },
  { id: 9, title: "Charizard", url: "./src/img/charizard.png" },
  { id: 10, title: "Naruto", url: "./src/img/naruto.jpg" },
  { id: 11, title: "Sasuke", url: "./src/img/sasuke.jpg" },
  { id: 12, title: "Sakura", url: "./src/img/sakura.jpg" },
];

const photoGrid = document.getElementById("photoGrid");
const noResults = document.getElementById("noResults");

function loadPhotos() {
  photoGrid.innerHTML = photos
    .map(
      (photo) => `
    <div class="photo-item">
      <img src="${photo.url}" alt="${photo.title}" class="photo">
      <p class="photo-name">${photo.title}</p>
    </div>
  `
    )
    .join("");
}

function filterPhotos() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(query)
  );

  if (filteredPhotos.length > 0) {
    noResults.classList.add("hidden");
    photoGrid.innerHTML = filteredPhotos
      .map(
        (photo) => `
      <div class="photo-item">
        <img src="${photo.url}" alt="${photo.title}" class="photo">
        <p class="photo-name">${photo.title}</p>
      </div>
    `
      )
      .join("");
  } else {
    noResults.classList.remove("hidden");
    photoGrid.innerHTML = "";
  }
}

document.addEventListener("DOMContentLoaded", loadPhotos);
