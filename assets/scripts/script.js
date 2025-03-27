// Add this JavaScript to toggle the animation
document.addEventListener("DOMContentLoaded", function () {
  const lightsController = document.getElementById("lights-controller");
  const oddLights = document.querySelectorAll(".odd");
  const evenLights = document.querySelectorAll(".even");

  lightsController.addEventListener("change", function () {
    if (lightsController.checked) {
      oddLights.forEach((light) => light.classList.add("celebrate"));
      evenLights.forEach((light) => light.classList.add("celebrate"));
    } else {
      oddLights.forEach((light) => light.classList.remove("celebrate"));
      evenLights.forEach((light) => light.classList.remove("celebrate"));
    }
  });
});
const lightsController = document.getElementById("lights-controller");
const card = document.querySelector(".card");
const eidMessage = document.querySelector(".eid-message");

lightsController.addEventListener("change", function () {
  if (this.checked) {
    card.classList.add("lights-on", "celebrating");
    eidMessage.style.display = "block";
  } else {
    card.classList.remove("lights-on", "celebrating");
    eidMessage.style.display = "none";
  }
});
