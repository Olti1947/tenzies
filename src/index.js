import React from 'react'
import ReactDOM  from 'react-dom'
import "./style.css"
import Die from "./Die.js"
import {nanoid} from "nanoid"
import Confetti from "react-confetti" 


function App(){
    let [diceNumbers, setNumbers] = React.useState(allNewDice())
let [tenzies, setTenzie] = React.useState(true)
React.useEffect(()=>{
    const result = diceNumbers.every(element => {
        if (element.value === diceNumbers[0].value && element.isHeld == true) {
          return true;
        }
      });
      setTenzie(result)
},[diceNumbers])
function allNewDice(){
    let numberArray = []
    for(let i = 0; numberArray.length < 10; i++){
    numberArray[i] = {
        "value" : Math.floor(Math.random() * (6 - 1 + 1) + 1),
        "isHeld" : false,
        "id" : nanoid()
    }
        
    }
    return numberArray
}
function hold(id){
setNumbers( oldNumber => oldNumber.map(item =>{
return item.id === id?  {...item, "isHeld" : !item.isHeld}: {...item} 

})
)

}
const mapped = diceNumbers.map(item =>{
    return <Die key = {item.id} value = {item.value} isHeld = {item.isHeld} handleClick = {() =>hold(item.id)} />

})
function rollDice(){
setNumbers(oldNumber => oldNumber.map(item =>{
    return item.isHeld? {...item}: {
        "value" : Math.floor(Math.random() * (6 - 1 + 1) + 1),
        "isHeld" : false,
        "id" : nanoid()
    }
}))
}
function playAgain(){
    setNumbers(allNewDice)
}
    return (
        <main>
           <h1>Tenzies</h1>
           <p>Roll until all dice are the same. <br />Click each die to freeze it at its current value between rolls.</p>
           <div className="grid-container">  
            {tenzies && <Confetti />}
            {mapped}
            </div>

            <button onClick={tenzies? playAgain : rollDice}>{tenzies? "New Game" : "Roll"}</button>
            </main>
    )
        }






ReactDOM.render(<App />, document.getElementById("root"))