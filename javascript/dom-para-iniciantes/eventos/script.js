const img = document.querySelectorAll("img");

function callback(event) {
  console.log(event);
  return (event.target.style.display = "none");
}

img.forEach((image) => {
  image.addEventListener("click", callback);
});

const linkExterno = document.querySelector('a[href^="https"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(event);
}

linkExterno.addEventListener("click", handleLinkExterno);

window.addEventListener("keydown", handleLinkExterno);
