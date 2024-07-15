const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.classList.add("grid-box");
  li.innerText = "Hello";
  const ul = document.querySelector("ul");
  ul.append(li);
});
