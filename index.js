const playboard=document.querySelector(".play");
const scoreelement=document.querySelector(".Score");
const highScoreElement=document.querySelector(".high");
const controls=document.querySelector(".control");



let gameOver=false;
let foodx,foody;
let snakex=5,snakey=5;
let velocityX=0,velocityY=0;
let snakeBody=[];
let setIntervalid;
let score=0;

let highScore=localStorage.getItem("high")|| 0;
highScoreElement.innerText=`High Score:${highScore}`;

