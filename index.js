// JavaScript to handle image hover effect
const disneylandImage = document.getElementById("disneyland-img");
const mountFujiImage = document.getElementById("mount-fuji-img");

disneylandImage.addEventListener("mouseover", function() {
  disneylandImage.style.transform = "scale(1.1)";  // Enlarge the Disneyland image
});

disneylandImage.addEventListener("mouseout", function() {
  disneylandImage.style.transform = "scale(1)";  // Return to original size
});

mountFujiImage.addEventListener("mouseover", function() {
  mountFujiImage.style.transform = "scale(1.1)";  // Enlarge the Mount Fuji image
});

mountFujiImage.addEventListener("mouseout", function() {
  mountFujiImage.style.transform = "scale(1)";  // Return to original size
});
