//calling a usermove variable
let userMove = "";

//choosing diffent moves 
document.querySelector('.stoneBtn').addEventListener('click',stone=>{
    userMove="stone";
    cheak();
})
document.querySelector('.PaperBtn').addEventListener('click',stone=>{
    userMove="Paper";
    cheak();
})
document.querySelector('.scissorBtn').addEventListener('click',stone=>{
    userMove="scissor";
    cheak();
})

//score calling 
let win = 0;
let lose = 0;

//function calling to display expression and score
function cheak(){
    //making list, generating computer move, taking expression 
    let move = ["stone", "paper" , "scissor"];
    let compMove = move[Math.floor(Math.random()*move.length)];
    let expression = document.querySelector('.expression');

    //cheaking with multiple conditions and giving expression 
    if(userMove.toLowerCase()===compMove){
        expression.innerHTML = "Match draw";
        expression.style.backgroundColor = "black";

    }else if(userMove.toLowerCase() ==="stone"&&compMove==="paper"){
        expression.innerHTML = "You lose paper break stone"
        expression.style.backgroundColor = "red";
        lose+=1;

    }else if(userMove.toLowerCase()==="paper"&&compMove==="stone"){
        expression.innerHTML = "You Win paper break stone"
        expression.style.backgroundColor = "green";
        win+=1;

    }else if(userMove.toLowerCase() ==="stone"&&compMove==="scissor"){
        expression.innerHTML = "You Win stone broke scissor"
        expression.style.backgroundColor = "green";
        win+=1;

    }else if(userMove.toLowerCase() ==="paper"&&compMove==="scissor"){
        expression.innerHTML = "You lose scissor cut the paper";
        expression.style.backgroundColor = "red";
        lose+=1;

    }else if(userMove.toLowerCase() ==="scissor" &&compMove==="stone"){
        expression.innerHTML = "You lose scissor broke by stone";
        expression.style.backgroundColor = "red";
        lose+=1;

    }else{
        expression.innerHTML = "You Win scissor cut the paper";
        expression.style.backgroundColor = 'green';
        win+=1;
    }
    //displaying points on the screen 
    document.querySelector('.win').innerHTML = win;
    document.querySelector('.lose').innerHTML = lose;
    if(lose<10 && win===10){
        celebrate();
    }
};

const celebrate=()=>{
    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: .6 }
    });
}
