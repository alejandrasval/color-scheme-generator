const btn = document.getElementById("btn-main");
const palette = document.getElementById("palette");
const colorPicker = document.getElementById("color-picker")

function renderColors(colors) {
  let main = "";
  for (let i = 0; i < colors.length; i++) {
    main += `
    <div class="col">
        <div class="color" style="background-color: ${colors[i].hex.value}"></div>
        <p class="color-name">${colors[i].hex.value}</p>
    </div>`;
  }
  colorPicker.setAttribute("value", `${colors[0].hex.value}`)
  palette.innerHTML = main;
}

btn.addEventListener("click", function () {
  const select = document.getElementById("theme");
  let value = select.options[select.selectedIndex].value;

  fetch(`https://www.thecolorapi.com/scheme?hex=24B1E0&mode=${value}&count=6`)
    .then((res) => res.json())
    .then((data) => {
      const colors = data.colors;
      renderColors(colors);
    });
});
