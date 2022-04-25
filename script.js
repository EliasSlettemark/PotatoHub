const banner = document.getElementById("banner");

const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
  banner.classList.toggle("active");
})

const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  window.location.href = "https://potatohub-video-test.eliasslettemark.repl.co";
})
