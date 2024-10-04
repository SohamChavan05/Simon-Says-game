let started = false;
level = 0;
score = 0;
hscore = 0;

btns = ["green","red","yellow","blue"];

gameSeq = [];
userSeq = [];


let levelText = document.querySelector(".levelText");
let startText = document.querySelector(".startText");
let scoreText = document.querySelector(".scoreText");
let turnText = document.querySelector(".turnText");
let hScore = document.querySelector(".hScore");
let clickSound = new Audio('click.mp3');
let errorSound = new Audio('error.mp3');


document.addEventListener("keypress",function(){
    turnText.classList.add("disable");
    if (started == false){
        startText.classList.add("disable");
        console.log("Game started");
        started = true;
        levelUp();
    }
});

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function levelUp(){
    if (level > 0 && level < 5){
        score = score + 5;
        scoreText.innerText=`Score : ${score}`;
    }else if((level > 5 && level < 10)|| level == 5){
        score = score + 10;
        scoreText.innerText=`Score : ${score}`;
    } else if(level > 10) {
        score = score + 15;
        scoreText.innerText=`Score : ${score}`;
    };

    userSeq = [];
    level++;
    levelText.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

// function flashGameSequence() {
    // turnText.classList.add("disable");
    // turnText.innerText="Your Turn";
    // let i = 0; 
    // function flashNext() {
        // if (i < gameSeq.length) {
            // let color = gameSeq[i];
            // let btn = document.querySelector(`.${color}`);
            // btnFlash(btn); 
            // i++; 
            // setTimeout(flashNext, 500); 
        // }else{
            // turnText.classList.remove("disable");
        // }
    // }
    // flashNext(); 
// }

function btnPress(){
    let btn = this;
    userFlash(btn);
    clickSound.play();

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if (userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        if(score > hscore){
            hscore = score;
        }
        errorSound.play();
        hScore.innerText=`Higest Score : ${hscore}`
        turnText.classList.add("disable");
        levelText.innerHTML = `Game Over`;
        scoreText.innerText = `Your Score : ${score}`;
        document.querySelector(".middle-circle").classList.add("shakeAni");
        setTimeout(function(){
            document.querySelector(".middle-circle").classList.remove("shakeAni");
        },500)
        reset();
    }
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    score = 0;
    startText.classList.remove("disable");

}

function btnFlash(btn){
    if(btn.id == "green"){
        btn.classList.add("green-flash");
        setTimeout(function(){
        btn.classList.remove("green-flash");
        },250);
    }else if(btn.id == "red"){
        btn.classList.add("red-flash");
        setTimeout(function(){
        btn.classList.remove("red-flash");
        },250);
    }else if(btn.id == "yellow"){
        btn.classList.add("yellow-flash");
        setTimeout(function(){
        btn.classList.remove("yellow-flash");
        },250);
    }else if(btn.id == "blue"){
        btn.classList.add("blue-flash");
        setTimeout(function(){
        btn.classList.remove("blue-flash");
        },250);
    }
}

function userFlash(btn){
    if(btn.id == "green"){
        btn.classList.add("green-flash");
        setTimeout(function(){
        btn.classList.remove("green-flash");
        },150);
    }
    if(btn.id == "red"){
        btn.classList.add("red-flash");
        setTimeout(function(){
        btn.classList.remove("red-flash");
        },150);
    }
    if(btn.id == "yellow"){
        btn.classList.add("yellow-flash");
        setTimeout(function(){
        btn.classList.remove("yellow-flash");
        },150);
    }
    if(btn.id == "blue"){
        btn.classList.add("blue-flash");
        setTimeout(function(){
        btn.classList.remove("blue-flash");
        },150);
    }
}

const numParticles = 50; // Number of particles
const body = document.body;
for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    
    // Set random size
    const size = Math.random() * 10 + 5; // Random size between 5px and 15px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Set random position
    particle.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    particle.style.top = `${Math.random() * 100}vh`; // Random vertical position
    
    // Set random animation duration
    particle.style.animationDuration = `${Math.random() * 3 + 5}s`; // Random duration between 5s and 8s
    
    body.appendChild(particle);
}