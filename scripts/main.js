let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 240;
let dx = 0.8;
let dy = 0.1;


let characterRadius = 15;

let gravity = 0.05;
let gravitySpeed = 0.01;

let randomDecider = 1; 



let score = 0;

document.addEventListener("keydown", moveUp);

function moveUp() {
    dy -= 1;
    acceleration(0.07);

}

function acceleration(n) {
    gravity = n;
}

function newPos() {
    gravitySpeed += gravity;
    x += dx;
    y += dy + gravitySpeed;
}

function TriangleBank() {
    ctx.beginPath();
    ctx.moveTo(270, 150);
    ctx.lineTo(320, 130);
    ctx.lineTo(320, 170);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(270, 190);
    ctx.lineTo(320, 170);
    ctx.lineTo(320, 210);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(270, 230);
    ctx.lineTo(320, 210);
    ctx.lineTo(320, 250);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(270, 270);
    ctx.lineTo(320, 250);
    ctx.lineTo(320, 290);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(270, 310);
    ctx.lineTo(320, 290);
    ctx.lineTo(320, 330);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(270, 350);
    ctx.lineTo(320, 330);
    ctx.lineTo(320, 370);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(270, 390);
    ctx.lineTo(320, 370);
    ctx.lineTo(320, 410);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(270, 410);
    ctx.lineTo(320, 390);
    ctx.lineTo(320, 430);
    ctx.fill();
}


function drawCharacter() {
    ctx.beginPath();
    ctx.arc(x, y, characterRadius, 0, Math.PI * 2)
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawFlooriangles() {
    ctx.beginPath();
    ctx.moveTo(20, 430);
    ctx.lineTo(0, 480);
    ctx.lineTo(40, 480);
    ctx.fillStyle = "#FF6289"; 
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(60, 430);
    ctx.lineTo(40, 480);
    ctx.lineTo(80, 480);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(100, 430);
    ctx.lineTo(80, 480);
    ctx.lineTo(120, 480);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(140, 430);
    ctx.lineTo(120, 480);
    ctx.lineTo(160, 480);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(180, 430);
    ctx.lineTo(160, 480);
    ctx.lineTo(200, 480);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(220, 430);
    ctx.lineTo(200, 480);
    ctx.lineTo(240, 480);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(260, 430);
    ctx.lineTo(240, 480);
    ctx.lineTo(280, 480);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(300, 430);
    ctx.lineTo(280, 480);
    ctx.lineTo(320, 480);
    ctx.fill();
    ctx.closePath();
}
function drawCeilingTriangles() {
    //triangles drawn from left to right
    ctx.beginPath();
    ctx.moveTo(20, 50);
    ctx.lineTo(0, 0);
    ctx.lineTo(40, 0);
    ctx.fillStyle = "#FF6289"; 
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(60, 50);
    ctx.lineTo(40, 0);
    ctx.lineTo(80, 0);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(80, 0);
    ctx.lineTo(120, 0);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(140, 50);
    ctx.lineTo(120, 0);
    ctx.lineTo(160, 0);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(180, 50);
    ctx.lineTo(160, 0);
    ctx.lineTo(200, 0);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(220, 50);
    ctx.lineTo(200, 0);
    ctx.lineTo(240, 0);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(260, 50);
    ctx.lineTo(240, 0);
    ctx.lineTo(280, 0);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(300, 50);
    ctx.lineTo(280, 0);
    ctx.lineTo(320, 0);
    ctx.fill();
    ctx.closePath();
}

function drawTrianglePosition1() {

    ctx.beginPath();
    ctx.moveTo(270, 70);
    ctx.lineTo(320, 50);
    ctx.lineTo(320, 90);
    ctx.fillStyle = "#FF6289"; 
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(270, 110);
    ctx.lineTo(320, 90);
    ctx.lineTo(320, 130);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(270, 250);
    ctx.lineTo(320, 230);
    ctx.lineTo(320, 270);
    ctx.fill();



}
function drawTrianglePosition2() {
    ctx.beginPath();
    ctx.moveTo(270, 410);
    ctx.lineTo(320, 390);
    ctx.lineTo(320, 430);
    ctx.fillStyle = "#FF6289"; 
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(270, 310);
    ctx.lineTo(320, 290);
    ctx.lineTo(320, 330);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(270, 190);
    ctx.lineTo(320, 170);
    ctx.lineTo(320, 210);
    ctx.fill();
}
function drawTrianglePosition3() {
    ctx.beginPath();
    ctx.moveTo(270, 270);
    ctx.lineTo(320, 250);
    ctx.lineTo(320, 290);
    ctx.fillStyle = "#FF6289"; 
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(270, 190);
    ctx.lineTo(320, 170);
    ctx.lineTo(320, 210);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(270, 310);
    ctx.lineTo(320, 290);
    ctx.lineTo(320, 330);
    ctx.fill();

}
function drawTrianglePosition4() {
    ctx.beginPath();
    ctx.moveTo(50, 310);
    ctx.lineTo(0, 290);
    ctx.lineTo(0, 330);
    ctx.fillStyle = "#FF6289"; 
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(50, 350);
    ctx.lineTo(0, 330);
    ctx.lineTo(0, 370);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(50, 390);
    ctx.lineTo(0, 370);
    ctx.lineTo(0, 410);
    ctx.fill();

}
function drawTrianglePosition5() {
    ctx.beginPath();
    ctx.moveTo(50, 410);
    ctx.lineTo(0, 390);
    ctx.lineTo(0, 430);
    ctx.fillStyle = "#FF6289"; 
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(50, 70);
    ctx.lineTo(0, 50);
    ctx.lineTo(0, 90);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(50, 110);
    ctx.lineTo(0, 90);
    ctx.lineTo(0, 130);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.lineTo(0, 230);
    ctx.lineTo(0, 270);
    ctx.fill();


}
function drawTrianglePosition6() {
    ctx.beginPath();
    ctx.moveTo(50, 410);
    ctx.lineTo(0, 390);
    ctx.lineTo(0, 430);
    ctx.fillStyle = "#FF6289"; 
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(50, 350);
    ctx.lineTo(0, 330);
    ctx.lineTo(0, 370);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(50, 70);
    ctx.lineTo(0, 50);
    ctx.lineTo(0, 90);
    ctx.fill();

}

function drawScore() {
    ctx.textAlign = "center"; 
    ctx.baseline = "middle";
    ctx.font = "48px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(score, 160, 256);
}
function drawCircle() {
    ctx.beginPath(); 
    ctx.arc(160, 240, 50, 0, Math.PI*2)
    ctx.fillStyle = "#a2a2a2"; 
    ctx.fill(); 
}

function draw() {
    // clears the canvas
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    

    

    drawCircle()
    drawScore();
    //draws stationary triangle spikes
    drawCeilingTriangles();
    drawFlooriangles();
    drawCharacter();

    //starting position
    

    //changes the x and y after every frame 
    x += dx;
    y += dy;
    // switch direction, tally score, produce spikes on other side, hide spikes on side and detect collision 
    if (x + dx > canvas.width - characterRadius || x + dx < characterRadius) {
        //switch direction and change direction
        dx = -dx * 1.1; 
        score++;
        
        //difficulty increase

        randomDecider = Math.floor(Math.random() * 2) + 1;
    }
    if (y > (canvas.height - 50) - characterRadius || y < 50) {
        alert("GAME OVER");
        clearInterval(interval);
        document.location.reload();
    }



    if (dx > 0) {
        if (randomDecider == 1) {
            drawTrianglePosition1();
            if (y < 90 && y > 50 && x > 270) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
            if (y < 130 && y > 90 && x > 270) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
            if (y < 270 && y > 230 && x > 270) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
        }

        else if (randomDecider == 2) {
            drawTrianglePosition2();
            if (y < 430 && y > 390 && x > 270) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 

            }
            if (y < 330 && y > 290 && x > 270) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
            if (y < 210 && y > 170 && x > 270) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
        }

        else if (randomDecider == 3) {
            drawTrianglePosition3();
            if (y < 290 && y > 250 && x > 270) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
            if (y < 210 && y > 170 && x > 270) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
            if (y < 330 && y > 290 && x > 270) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
        }
    }

    if (dx < 0) {
        if (randomDecider == 1) {
            drawTrianglePosition4();
            if (y < 330 && y > 290 && x < 50) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
            if (y < 370 && y > 330 && x < 50) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
            if (y < 410 && y > 370 && x < 50) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
        }
        else if (randomDecider == 2) {
            drawTrianglePosition5();
            if (y < 430 && y > 390 && x < 50) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
            if (y < 90 && y > 50 && x < 50) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
            if (y < 130 && y > 90 && x < 50) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
            if (y < 270 && y > 230 && x < 50) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }

        }
        else if (randomDecider == 3) {
            drawTrianglePosition6();
            if (y < 430 && y > 390 && x < 50) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
            if (y < 370 && y > 330 && x < 50) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 
            }
            if (y < 90 && y > 50 && x < 50) {
                alert("GAME OVER");
                clearInterval(interval);
                document.location.reload();
                score = 0; 

            }
        }
    }



    newPos();

}



setInterval(draw, 10);
