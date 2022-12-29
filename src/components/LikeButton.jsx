import { useState } from "react"
export default function LikeButton(){
    const colors = ['purple','blue','green','yellow','orange','red']

    let [counter,setCounter] = useState(0)
    return(
        <>
            <button onClick={()=> setCounter(counter+ 1)}>
{counter} likes
            </button>
        </>
    )
}