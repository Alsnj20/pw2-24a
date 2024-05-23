const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const p = document.createElement('p');
  p.textContent = "Execute by the server";
  document.body.appendChild(p);
})
console.log("Holam, is a JS script in the pub folder of execute by the server.");