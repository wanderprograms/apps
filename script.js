console.log("script.js loaded");

// Modal debug
function showInfo(title, size, description) {
  console.log("showInfo called for", title);
  const modal = document.getElementById("infoModal");
  if (!modal) console.error("Modal element not found!");
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalSize").textContent = size;
  document.getElementById("modalDesc").innerHTML = description;
  modal.classList.remove("hidden");
}

function filterApps(category) {
  console.log("filterApps:", category);
  const cards = document.querySelectorAll(".app-card");
  if (cards.length === 0) console.warn("No .app-card found");
  cards.forEach(card => {
    const match = category === "All" || card.dataset.category === category;
    card.style.display = match ? "block" : "none";
  });
}


function searchApps() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  console.log("searchApps query:", query);
  const cards = document.querySelectorAll(".app-card");
  cards.forEach(card => { 
    const title = card.querySelector("h2").textContent.toLowerCase();
    const desc = card.getAttribute("onclick").toLowerCase();
    const match = title.includes(query) || desc.includes(query);
    card.style.display = match ? "block" : "none"; 
     
  });
 }
 

function showInfo(title, size, description) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalSize").textContent = size;
  document.getElementById("modalDesc").innerHTML = description; // <br> support
  document.getElementById("infoModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("infoModal").classList.add("hidden");
}

function filterApps(category) {
  const cards = document.querySelectorAll(".app-card");
  cards.forEach(card => {
    const match =
      category === "All" ||
      card.dataset.category === category;
    card.style.display = match ? "block" : "none";
  });
}

function searchApps() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const cards = document.querySelectorAll(".app-card");
  cards.forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    const match = title.includes(query);
    card.style.display = match ? "block" : "none";
  });
}

