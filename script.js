 // Declaring Variables
 
 const FPS = 30;
 let bs = 30;
 let bx, by;
 let xv, yx;
 let canvas, context;

 // Loading Canvas

 canvas = document.getElementById("gameCanvas");
 context = canvas.getContext("2d");
 // Setting up Interval ( Game Loop )

 setInterval(update, 1000 / FPS);

 // Setting Ball Starting Postion

 bx = canvas.width / 2;
 by = canvas.height / 2;

 // Setting Random Ball starting Speed ( Between 25 and 100 Pexel per second *PPS*)

 xv = Math.floor(Math.random() * 76 + 25) / FPS;
 yv = Math.floor(Math.random() * 76 + 25) / FPS;

 // Setting Random Ball Direction

 if (Math.floor(Math.random() * 2) == 0) {
     xv = -xv
 }
 if (Math.floor(Math.random() * 2) == 0) {
    yv = -yv
}
 // Setting Update Function
 function update(){
     // Moving the ball
     bx += xv;
     by += yv;
     // Drawing Background and ball
     
     context.fillStyle = "black";
     context.fillRect(0, 0, canvas.width, canvas.height);
     context.fillStyle = "yellow";
     context.fillRect(bx - bx / 2, by - bs / 2, bs, bs);
    }