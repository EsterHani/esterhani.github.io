let answer;
let score = 0;
let dissipation = 3;

let previousFirst = 0;
let previousSecond = 0;

startGame();

document.getElementById("container").addEventListener("click", function(Event) {
    if (!Event.target.className.match(/square/)) {
        return;
    }
    if (Event.target.textContent == answer) {
        startGame();
    } else {
        windowNewGame();
    }
});

function startGame() {
    do{
    var first = getRandomInt(1, 10);
    }while(first != previousFirst);
    do{    
    var second = getRandomInt(1, 10);
    }while(second != previousSecond) ;
    previousSecond = second;
    previousFirst = first;
        
    document.getElementById("first").textContent = first;
    document.getElementById("second").textContent = second;
    answer = first * second;

    let squares = document.querySelectorAll(".square");

    let numbers = [];
    numbers.push(answer);
    while (numbers.length < squares.length) {
        let x = getRandomInt(answer - dissipation, answer + dissipation);
        if (x > 0) {
            if (numbers.indexOf(x) == -1) {
                numbers.push(x);
            }
        }
    }

    function sortfunction(a, b) {
        return (Math.random() - 0.5);
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

function windowNewGame() {
    let show = document.getElementById("show");
    let showClose = document.querySelector(".close");
    let accountEnd = document.querySelector(".accountEnd");
    show.style.opacity = "1";
    show.style.zIndex = "2";
    document.getElementById("accountEnd").textContent = score - 1;
    showClose.onclick = function() {
        show.style.opacity = "0";
        show.style.zIndex = "0";
        score = 0;
        startGame();
    }
}
