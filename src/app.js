/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let num = Math.floor(Math.random() * 12) + 1;
  let numberDom = document.getElementById("numero");
  numberDom.innerText = num;

  var figuras = ["♦", "♥", "♠", "♣"];
  var figura = figuras[Math.floor(Math.random() * 4)];

  // Colocar el icono en la esquina superior izquierda
  let iconoDom = document.getElementById("icono");
  iconoDom.innerText = figura;

  // Establecer el color de las figuras en los bordes
  if (figura === "♥" || figura === "♦") {
    iconoDom.style.color = "red";
    numberDom.style.color = "red";
  } else {
    iconoDom.style.color = "black";
    numberDom.style.color = "black";
  }
  //Copia del icono transversalmente

  let iconoCopiaDom = document.createElement("div");
  iconoCopiaDom.classList.add("icono-copia");
  iconoCopiaDom.innerText = figura;
  iconoCopiaDom.style.color =
    figura === "♥" || figura === "♦" ? "red" : "black";

  let cartaDiv = document.getElementById("carta");
  cartaDiv.appendChild(iconoCopiaDom);
};
