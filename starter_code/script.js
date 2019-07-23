let positionCarX = 220;

window.onload = function() {
  drawBoard();
  document.getElementById("start-button").onclick = function() {
    startGame();
   
  }
};

function drawBoard() {
  
  let canvas = document.getElementById('race-car');
  let ctx = canvas.getContext('2d');
  
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
 
  ctx.fillStyle = "black";
  ctx.fillRect(100,0, canvas.width/2, canvas.height);

  ctx.fillStyle = "white";
  ctx.setLineDash([20, 3]);
  ctx.beginPath();
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 600);
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.fillStyle = "green";
  ctx.fillRect(90,0, 20, canvas.height);

  ctx.fillStyle = "green";
  ctx.fillRect(290,0, 20, canvas.height);

  // Bild laden in der Funktion, außerhalb der Funktion die Quelle zuweisen

  let carImg = new Image();
  carImg.onload = function()  {
    ctx.drawImage(carImg, positionCarX, 480, 50, 100);
    
  };
  carImg.src="images/car.png";
};

  function startGame() {

    // let canvas = document.getElementById('race-car');

    // let ctx = canvas.getContext('2d');

    //canvas.addEventListener("keydown", moveCar, true);

    document.addEventListener("keydown", event => {
      if (event.keyCode === 37) {
        positionCarX = positionCarX - 10;
    
      } else if (event.keyCode === 38)  {
        positionCarX = positionCarX + 10;
      }
       drawBoard();
    });
  
};
