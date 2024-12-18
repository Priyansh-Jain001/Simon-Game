let gameSeq=[];
let userSeq=[];
let btns=["red", "orange", "green", "yellow"];
let scores = [];
let Score = 0;

let started = false;
let level=0;
// let score = 0;

let h3 = document.querySelector('h3');


let body = document.querySelector('body');

let gameStart = (event) =>{
    if(started == false){
        console.log('game started');
        started = true;

        levelUp();
    }
}

body.addEventListener('keypress', gameStart);
body.addEventListener('click', gameStart);

// default flash color of the button
function gameFlash(button){
    button.classList.add("flash")
    setTimeout(() => {
        button.classList.remove("flash");
    }, 250);
}

// flash color when user presses the button
function userFlash(button){
    button.classList.add("user")
    setTimeout(() => {
        button.classList.remove("user");
    }, 250);
}

// it shows that the game has started
function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
// push the flashed colour in game sequence
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

// used to check the gameSeq and userSeq
function checkAns(idx){  //no of elements in game sequence and user sequence is always equals to the level no.
    console.log('current level', level);
    // let idx = level-1;

    if(gameSeq[idx] == userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML = ` "Game Over!!" Your Score is ${gameSeq.length-1} <br> Press enter to start again`;
        body.classList.add('gameOver');
        setTimeout(() => {
            body.classList.remove('gameOver');
        }, 100);
        
        score = gameSeq.length-1;
        scores.push(score);
        // console.log(scores);

        reset();  // as game is over we need to reset all the thing in orfer to rerun the game
    }
    
    
}

// works when user presses the button
function btnPress(){
    let btn = this;
    userFlash(btn);

// push the pressed colour in game sequence
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click' , btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    Score = highestScore(scores);

    console.log("your scores are:",scores);
    console.log("highest score is",Score)

    
    
   
}

let max = -1;
function highestScore(arr){
    for(let i=0; i<scores.length;i++){
        if(scores[i]>max){
            max = scores[i];
        }
    }
    return max; 
}

let btn_highScore = document.querySelector('.btn-highScore');
btn_highScore.addEventListener('click', () =>{
        let p = document.createElement('p');
        p.innerText = `Highest Score is ${Score}`;
        body.appendChild(p);
        setTimeout(() =>{
            body.removeChild(p);
        },1000);
    // body.style.backgroundColor='black';q1
});



