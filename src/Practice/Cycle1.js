import React,{ useEffect, useState } from "react"

function Cycle1() {
    const[count,setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        },100)
    })
    return(
        <>
        <h1>Count is - {count}</h1>
        </>
    )
}
export default Cycle1; 