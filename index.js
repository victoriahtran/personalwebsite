const links = document.querySelectorAll("nav a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();

  for (const link of links) {
    link.classList.remove("active");
  }

  const href = this.getAttribute("href");
  e.target.classList.add("active");
  console.log(e.target);

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}
