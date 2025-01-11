let toggel = document.getElementById("toggel");
let ul = document.getElementById("ul");
toggel.onclick = () => {
  if (ul.classList.contains("hidden")) {
    ul.classList.remove("hidden");
  } else {
    ul.classList.add("hidden");
  }
};
