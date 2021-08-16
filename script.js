const button=document.querySelector('button');
const output=document.querySelector('h2');

button.addEventListener('click', function(){
    let rolls=[roll(6), roll(6)];
    let temp;
    let firstDice='assets/dice'+rolls[0]+'.png';
    let secondDice='assets/dice'+rolls[1]+'.png';
    document.querySelectorAll('img')[0].setAttribute('src', firstDice);
    document.querySelectorAll('img')[1].setAttribute('src', secondDice);

    if(rolls[0]>rolls[1]){
        temp='You win!';
    }else if(rolls[0]<rolls[1]){
        temp='Computer wins!';
    }else{
        temp='It is a draw!';
    }

    output.innerHTML=temp;})

function roll(num){
    let rRoll=Math.floor(Math.random()*num)+1;
    return rRoll;
}