function setup() {
    createCanvas(400, 400);
    background("white");
  }
  
  function draw() {
    // cria uma tela de 400px de largura por 400px de altura
    
    stroke("blue");
    fill("red");
     
     if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }