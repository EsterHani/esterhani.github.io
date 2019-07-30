let answer;
let score = 0;

startGame();

document.getElementById("container").addEventListener("click", function(Event) {
    if (!Event.target.className.match(/square/)){return;}
    if (Event.target.textContent == answer) {
        startGame();
    } else {
        windowNewGame();
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
    function sortfunction(a, b) {
        return (0.5 — Math.random());
    }
    numbers.sort(sortfunction);
    
    
    for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = numbers[i];
    }
    document.getElementById("account").textContent = score++;
}

function getRandomInt(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function windowNewGame(){
    let show = document.getElementById("show");
    let showClose = document.querySelector(".close");
    let accountEnd = document.querySelector(".accountEnd");
    show.style.opacity="1";
    show.style.zIndex="2";
    document.getElementById("accountEnd").textContent = score-1;
    showClose.onclick=function(){
        show.style.opacity="0";
        show.style.zIndex="0";
        score = 0;
        startGame();   
    }
}