let screen_top = document.querySelector('.screen-top');
let screen_bot = document.querySelector('.screen-bot');
const equal = document.querySelector('#equal');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const subtract = document.querySelector('#subtract');
const add = document.querySelector('#add');
const decimal = document.querySelector('#decimal');
const zero = document.querySelector('#zero');
const double_zero = document.querySelector('#double-zero');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');


one.addEventListener('click', function(){
    screen_bot.textContent += one.textContent;}
);
two.addEventListener('click', function(){
    screen_bot.textContent += two.textContent;}
);
three.addEventListener('click', function(){
    screen_bot.textContent += three.textContent;}
);
four.addEventListener('click', function(){
    screen_bot.textContent += four.textContent;}
);
five.addEventListener('click', function(){
    screen_bot.textContent += five.textContent;}
);
six.addEventListener('click', function(){
    screen_bot.textContent += six.textContent;}
);
seven.addEventListener('click', function(){
    screen_bot.textContent = seven.textContent;}
);
eight.addEventListener('click', function(){
    screen_bot.textContent += eight.textContent;}
);
nine.addEventListener('click', function(){
    screen_bot.textContent += nine.textContent;}
);
zero.addEventListener('click', function(){
    screen_bot.textContent += zero.textContent;}
);
double_zero.addEventListener('click', function(){
    screen_bot.textContent += double_zero.textContent;}
);
add.addEventListener('click', function(){
    screen_bot.textContent += add.textContent;}
);
subtract.addEventListener('click', function(){
    screen_bot.textContent += subtract.textContent;}
);
multiply.addEventListener('click', function(){
    screen_bot.textContent += multiply.textContent;}
);
divide.addEventListener('click', function(){
    screen_bot.textContent += divide.textContent;}
);
decimal.addEventListener('click', function(){
    screen_bot.textContent += ".";}
);
equal.addEventListener('click', function(){
    screen_top.textContent = eval(screen_bot.textContent);
    screen_bot.textContent = eval(screen_bot.textContent);} 
);
clear.addEventListener('click', function(){
    screen_top.textContent = '';
    screen_bot.textContent = '';}
);
backspace.addEventListener('click', function(){
    screen_bot.textContent = screen_bot.textContent.slice(0, -1);}
);
percent.addEventListener('click', function(){
    screen_bot.textContent = screen_bot.textContent / 100;}
);