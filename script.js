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

