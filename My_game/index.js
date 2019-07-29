let answer;
let score = 0;

startGame();

document.getElementById("container").addEventListener("click", function(Event) {
    if (!Event.target.className.match(/square/)){return;}
    if (Event.target.textContent == answer) {
        startGame();
    } else {
        windowNewGame();
        /*score = 0;
        startGame();*/
    }
});

function startGame() {
    let first = getRandomInt(1, 10);
    let second = getRandomInt(1, 10);
    document.getElementById("first").textContent = first;
    document.getElementById("second").textContent = second;
    answer = first * second;
    
    let squares = document.querySelectorAll(".square");
    
    let numbers = [];
    for (let i = 0; i < squares.length - 1; i++) {
        let x = getRandomInt(1, 100);
        while (~numbers.indexOf(x) || x === answer) {//Проверка, чтобы не было повторных ответов
            x = getRandomInt(0, 100);
        }
        numbers.push(x);
    }
    
    numbers.push(answer);
    numbers.sort(function(a, b) {
    return (Math.random() - 0.5);
    });
    
    for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = numbers[i];
    }
    document.getElementById("account").textContent = score++;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function windowNewGame(){
    let show = document.getElementById("show");
    let showClose = document.querySelector(".close");
    show.style.display="flex";
    showClose.onclick=function(){
        show.style.display="none";
        score = 0;
        startGame();   
    }
}