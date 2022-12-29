import emptyDice from '../assets/images/dice-empty.png';
import diceOne from '../assets/images/dice1.png';
import diceTwo from '../assets/images/dice2.png';
import diceThree from '../assets/images/dice3.png';
import diceFour from '../assets/images/dice4.png';
import diceFive from '../assets/images/dice5.png';
import diceSix from '../assets/images/dice16png';

export default function Dice() {
  const randomDiceImg = () => {
    const diceCollection = [
      diceOne,
      diceTwo,
      diceThree,
      diceFour,
      diceFive,
      diceSix,
    ];
    const randomSix  = Math.floor(Math.random()* 6) +1
    return diceCollection[randomSix]
  };

  return <>
<button onClick={()=>{
    setTimeout()
}}></button>
{randomDiceImg}
  </>;
}
