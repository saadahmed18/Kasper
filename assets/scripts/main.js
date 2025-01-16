let toggel = document.getElementById("toggel");
let ul = document.getElementById("ul");
toggel.onclick = () => {
  if (ul.classList.contains("hidden")) {
    ul.classList.remove("hidden");
  } else {
    ul.classList.add("hidden");
  }
};

let elements = `<div id = "info">
<h3>Awesome Image</h3>
<p>Photography</p>
</div>`;

// let Elements = ` => div
// h3
// p
// `
//  do
let card = document.getElementsByClassName("card");
for (let i = 0; i < 8; i++) {
  console.log(card[i]);
}
card.onclick = () => {
  
}
