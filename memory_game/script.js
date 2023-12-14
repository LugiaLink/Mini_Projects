const moves = document.getElementById('movesCount');
const timeValue = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const gameContainer = document.querySelector('game-container');
const result = document.getElementById('result');
const controls = document.querySelector('controls-container');
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//items array
const items= [
    {name:'agle', image:'images/agle.png'},
    {name:'bird', image:'images/bird.png'},
    {name:'owl', image:'images/owl.png'},
    {name:'penguin', image:'images/penguin.png'},
    {name:'reindeer', image:'images/reindeer.png'},
    {name:'snake', image:'images/snake.png'},
    {name:'tiger', image:'images/tiger.png'},
    {name:'toucan', image:'images/toucan.png'},
];

//initial Time
let seconds = 0,
minutes = 0;
//Initial Moves and win count
let movesCount = 0,
winCount = 0;

//For timer
const timeGenerator = () => {
    seconds += 1;
    //minutes logic
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    //format time before displaying
    let secondsValue = seconds < 10 ? `0${seconds}`: seconds;
    let minutesValue = minutes < 10 ? `0${minutes}`: minutes;
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondValue}`;
};

// for calculation moves
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

//pick rando objects from the items array
const generateRandom = (size = 4) => {
    //temporary array
    let tempArray = [...items];
    //initialize cardValues array
    let cardValues = [];
    //size should be double (4*4 matrix)/2 since pairs of objects would exist
    size = (size * size)/2;
    //random object  selection
    for (let i = 0; i < size; i++){
        const randomIndex = Math.floor(Math.random()* tempArray.length);
        cardValues.push(tempArray[randomIndex]);
        //once selected remove the object from the temparray
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = "";
    cardValues = [...cardValues, ...cardValues];
    //simple shuffle
    cardValues.sort(() => Math.random() - 0.5);
    for(let i = 0; i < size * size; i++){}
};