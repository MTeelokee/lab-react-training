export default function Rating ({children}) {
let currentStarValue = Math.floor(Number(children[0]))
console.log(currentStarValue)
const fullStar = '★'  
const emptyStar = '☆'  
let remainingStartCount = 5 - currentStarValue 
let finalResult = fullStar.repeat(currentStarValue) + emptyStar.repeat(remainingStartCount)
return(
        <>

<div>
    {finalResult}
</div>

        </>
    )

}