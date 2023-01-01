import React from 'react';
import '../css/creditCard.css';

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor
}) {
let currentType = type.toString()
let currentImgPath = {visa: '/visa.png', mc:"/master-card.svg"}
let current =''
console.log(currentType)
if(currentType === 'Visa' ){
  current = currentImgPath.visa
}
else{
  current = currentImgPath.mc 
}

  return (
    
    <>

      <div className="backgroundCreditCard" style={{ backgroundColor: `${bgColor}` }}>
        <div className="containerCreditCard">
          <img className="creditCardType" src={current} alt="" />
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
