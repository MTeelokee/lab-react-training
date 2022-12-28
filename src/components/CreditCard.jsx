import React from 'react';
import '../css/creditCard.css';
import visaImg from '../../src/assets/images/visa.png';

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor
}) {
  /* let currentType = bank.toString()
let currentImgPath = {visa: '../assets/images/visa.png', mc:'../assets/images/master-card.svg'}
let current 
currentType === 'Visa' ? current = currentImgPath.visa : current = currentImgPath.mc  
console.log(currentType) */
  return (
    <>
      <div className="backgroundCreditCard" style={{ backgroundColor: `${bgColor}` }}>
        <div className="containerCreditCard">
          <img className="creditCardType" src={visaImg} alt="" />
          <div className="cardNumber">
            {number}
          </div>
          <div className="expBank">
            <div className="expirationDate">{`Expires ${expirationMonth}/${expirationYear}`}</div>
            <div className="bankName">{bank}</div>
          </div>
          <div className="holderInfos">{owner}</div>
        </div>
      </div>
    </>
  );
}
