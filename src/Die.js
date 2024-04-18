import React from "react"
import ReactDOM  from "react-dom"
import "./style.css"

// let [diceNumbers, setNumbers] = React.useState(allNewDice())

// // function allNewDice(){
// //     let numberArray = []
// //     for(let i = 0; numberArray.length < 10; i++){
// //     numberArray[i] = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        
// //     }
//     return numberArray
// }
export default function Die(props){
   const style = {
    backgroundColor: props.isHeld ? "#59e391" : "white"
   }
    return(
        <div className="box" style={style} onClick={props.handleClick}><h2>{props.value}</h2></div>
    )
} 