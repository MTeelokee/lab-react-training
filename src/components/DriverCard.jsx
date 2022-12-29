export default function DriverCard ({name,rating,img,car}){
    let currentStarValue = Math.round(Number(rating))
const fullStar = '★'  
const emptyStar = '☆'  
let remainingStartCount = 5 - currentStarValue 
let finalResult = fullStar.repeat(currentStarValue) + emptyStar.repeat(remainingStartCount)
    return(
        <>
{name}
{rating}
<img src={img} alt="" /> 
{`${car.model} - ${car.licensePlate}`}
{finalResult}
        </>
    )
}