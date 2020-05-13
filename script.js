 // Declaring Variables
 
 const FPS = 30;
 let bs = 30;
 let bx, by;
 let xv, yx;
 let canvas, context;
//  let photo = document.getElementById

 // Loading Canvas

 canvas = document.getElementById("gameCanvas");
 context = canvas.getContext("2d");
 // Setting up Interval ( Game Loop )

 setInterval(update, 1000 / FPS);

 // Setting Ball Starting Postion

 bx = canvas.width / 2;
 by = canvas.height / 2;

 // Setting Random Ball starting Speed ( Between 25 and 100 Pexel per second *PPS*)

 xv = Math.floor(Math.random() * 100 + 25) / FPS;
 yv = Math.floor(Math.random() * 100 + 25) / FPS;

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

     // Bouncing the ball off each wall

     if(bx - bs / 2 < 0 && xv < 0){//X Direction
         xv = -xv;
     }
     if(bx + bs / 2 > canvas.width && xv >0){//Problem here
        xv = -xv;
    }

    if(by - bs / 2 < 0 && yv <0){ //Y Direction
        yv = -yv;
    }
    if(by + bs / 2 > canvas.height && yv >0){
       yv = -yv;
   }     
     // Drawing Background and ball //
     
     context.fillStyle = "orange";
     context.fillRect(0, 0, canvas.width, canvas.height);
     context.fillStyle = "black";
     context.fillRect(bx - bs / 2, by - bs / 2, bs, bs);// bug found here and fixed
    }
   