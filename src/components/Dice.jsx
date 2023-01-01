import { useState ,useEffect } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import diceOne from '../assets/images/dice1.png';
import diceTwo from '../assets/images/dice2.png';
import diceThree from '../assets/images/dice3.png';
import diceFour from '../assets/images/dice4.png';
import diceFive from '../assets/images/dice5.png';
import diceSix from '../assets/images/dice6.png';
import '../css/dice.css'

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
    const randomSix = Math.floor(Math.random() * 6) ;
    return diceCollection[randomSix];
  };




const emptyDiceLoading = setTimeout(() => emptyDice, 1000);
clearTimeout()
  
let [currentImg,setCurrentImg] = useState(randomDiceImg)
  return (
    <>
      <button  onClick={() => {
        setCurrentImg(emptyDiceLoading)
        setCurrentImg(randomDiceImg)
      }}>
        <img className='diceContainer' src={currentImg} alt="" />
      </button>
     
    </>
  );
}
