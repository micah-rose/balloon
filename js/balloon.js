var rand;
var rand2;
var rand3;
var rand4;

function generateBalloons() {
  //Image changes for b1
  rand = Math.floor(Math.random() * 5);

  switch (rand) {
    case 0:
      document.getElementById("b1").src = "img/balloon20.jpg";
      break;
    case 1:
      document.getElementById("b1").src = "img/balloon40.jpg";
      break;
    case 2:
      document.getElementById("b1").src = "img/balloon60.jpg";
      break;
    case 3:
      document.getElementById("b1").src = "img/balloon80.jpg";
      break;
    case 4:
      document.getElementById("b1").src = "img/balloon100.jpg";
      break;
  }
  //Text changes for b1
  rand3 = Math.floor(Math.random() * 2);

  if (rand3 == 0 && rand == 0) {
    document.getElementById("b1-p").innerText = "XS Helium";
  }
  if (rand3 == 0 && rand == 1) {
    document.getElementById("b1-p").innerText = "S Helium";
  }
  if (rand3 == 0 && rand == 2) {
    document.getElementById("b1-p").innerText = "M Helium";
  }
  if (rand3 == 0 && rand == 3) {
    document.getElementById("b1-p").innerText = "L Helium";
  }
  if (rand3 == 0 && rand == 4) {
    document.getElementById("b1-p").innerText = "XL Helium";
  }
  if (rand3 == 1 && rand == 0) {
    document.getElementById("b1-p").innerText = "XS Helium";
  }
  if (rand3 == 1 && rand == 1) {
    document.getElementById("b1-p").innerText = "S Helium";
  }
  if (rand3 == 1 && rand == 2) {
    document.getElementById("b1-p").innerText = "M Helium";
  }
  if (rand3 == 1 && rand == 3) {
    document.getElementById("b1-p").innerText = "L Helium";
  }
  if (rand3 == 1 && rand == 4) {
    document.getElementById("b1-p").innerText = "XL Helium";
  }

  //Image changes for b2
  rand2 = Math.floor(Math.random() * 5);

  switch (rand2) {
    case 0:
      document.getElementById("b2").src = "img/balloon20.jpg";
      break;
    case 1:
      document.getElementById("b2").src = "img/balloon40.jpg";
      break;
    case 2:
      document.getElementById("b2").src = "img/balloon60.jpg";
      break;
    case 3:
      document.getElementById("b2").src = "img/balloon80.jpg";
      break;
    case 4:
      document.getElementById("b2").src = "img/balloon100.jpg";
      break;
  }

  //Text changes for b2
  rand4 = Math.floor(Math.random() * 2);

  if (rand4 == 0 && rand2 == 0) {
    document.getElementById("b2-p").innerText = "XS Helium";
  }
  if (rand4 == 0 && rand2 == 1) {
    document.getElementById("b2-p").innerText = "S Helium";
  }
  if (rand4 == 0 && rand2 == 2) {
    document.getElementById("b2-p").innerText = "M Helium";
  }
  if (rand4 == 0 && rand2 == 3) {
    document.getElementById("b2-p").innerText = "L Helium";
  }
  if (rand4 == 0 && rand2 == 4) {
    document.getElementById("b2-p").innerText = "XL Helium";
  }
  if (rand4 == 1 && rand2 == 0) {
    document.getElementById("b2-p").innerText = "XS Helium";
  }
  if (rand4 == 1 && rand2 == 1) {
    document.getElementById("b2-p").innerText = "S Helium";
  }
  if (rand4 == 1 && rand2 == 2) {
    document.getElementById("b2-p").innerText = "M Helium";
  }
  if (rand4 == 1 && rand2 == 3) {
    document.getElementById("b2-p").innerText = "L Helium";
  }
  if (rand4 == 1 && rand2 == 4) {
    document.getElementById("b2-p").innerText = "XL Helium";
  }

  //Comparison for b1 and b2
  if (rand == rand2 && rand3 == rand4) {
    document.getElementById("results").innerText = "You got a match!!";
  } else {
    document.getElementById("results").innerText = "No match, sorry!!";
  }
}
