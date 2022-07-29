const btn = document.getElementById("btn-main");

btn.addEventListener("click", function() {
    const select = document.getElementById("theme");
    let value = select.options[select.selectedIndex].value;
  
    fetch(`https://www.thecolorapi.com/scheme?hex=24B1E0&mode=${value}&count=6`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
});
