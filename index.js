const playboard=document.querySelector(".play");
const scoreelement=document.querySelector(".Score");
const highScoreElement=document.querySelector(".high");
const controls=document.querySelector(".control");



let gameOver=false;
let foodx,foody;
let snakex=5,snakey=5;
let velocityX=0;
let velocityY=0;
let snakeBody=[];
let setIntervalid;
let score=0;

let highScore=localStorage.getItem("high")|| 0;
highScoreElement.innerText=`High Score:${highScore}`;

const updateFoodPosition =() => {
    foodx=Math.floor(Math.random()*30)+1;
    foody=Math.floor(Math.random()*30)+1;

}
const handelGame =() =>{
    clearInterval(setIntervalid);
    alert("Game over press ok to replay");
    location.reload();
}

const changeDirection =e =>{
    if(e.key === "ArrowUp" && velocityY !=1 ){
        velocityX=0;
        velocityY=-1;
    }
    else if(e.key === "Arrowdown" && velocityY !=-1){
        velocityX=0;
        velocityY=1;
    }else if(e.key === "ArrowLeft" && velocityY !=-1){
        velocityX=-1;
        velocityY=0;
    }else if(e.key === "Arrowright" && velocityY !=-1){
        velocityX=1;
        velocityY=0;
    }
}
controls.forEach(button => button.addEventListener("click",()=>changeDirection({key:button.dataset.key})));