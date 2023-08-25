// Creation de trois variables pour stocker les chiffres aleatoire

function colorGenerator() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  let color = `rgb(${r} , ${g} ,${b})`;

  // Donner au body une couleur de fond en rgb()
  document.body.style.background = color;
  // Montrer sur le body la couleur en rgb()
  document.getElementById("rgbColor").innerHTML = color;
}
setInterval(colorGenerator, 1000);
