 // Declaring Variables
 
 const FPS = 30;
 const bs = 30;
 const bx, by;
 const xv, yx;
 const canvas, context;

 // Loading Canvas

 canvas = document.getElementById("gameCanvas");
 context = canvas.getContext("2d");
 // Setting up Interval ( Game Loop )

 setInterval(update, 1000 / FPS);

 // Setting Ball Starting Postion

 bx = canvas.width / 2;
 by = canvas.height / 2;

 // Setting Rando Ball starting Speed ( Between 100 and 200 Pexel per second *PPS*)

 xv = Math.floor(Math.random() * 101 + 100) / FPS;
 yv = Math.floor(Math.random() * 101 + 100) / FPS;

 // Setting Update Function
 function update() {
     // Moving the ball
     bx += xv;
     by += yv;
 }
 // Drawing Background and ball

 context.fillStyle = "black";
 context.fillRect(0, 0, canvas.width, canva.height);