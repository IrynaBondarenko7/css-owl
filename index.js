export const refs = {
  owl: document.querySelector(".owl"),
  rightWings: document.querySelector("#right-wings"),
};

refs.owl.addEventListener("mouseenter", onOwlHover);

function onOwlHover() {
  console.log("hello");
}
