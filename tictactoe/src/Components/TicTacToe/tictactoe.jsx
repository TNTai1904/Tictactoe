import React, { useRef, useState } from 'react'
import './tictactoe.css'
import circle_icon from '../Picture/circle.png'
import cross_icon from '../Picture/cross.png'
 
let data = ["","","","","","","","",""];
const Tictactoe = () => {

  let [count, setCount] = useState(1);
  let [lock, setLock] = useState(false);
  let checkWinner = useRef(null);
  let boxReset1 = useRef(null);
  let boxReset2 = useRef(null);
  let boxReset3 = useRef(null);
  let boxReset4 = useRef(null);
  let boxReset5 = useRef(null);
  let boxReset6 = useRef(null);
  let boxReset7 = useRef(null);
  let boxReset8 = useRef(null);
  let boxReset9 = useRef(null);


  let box_reset = [boxReset1, boxReset2, boxReset3, boxReset4, boxReset5, boxReset6, boxReset7, boxReset8, boxReset9];
  const toggle = (e,num) => {
    if (lock) {
      return 0;
    }
    if(count%2===0){
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num]="x";
      setCount(++count);
    }
    else{
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num]="o";
      setCount(++count);
    }
    win();
  }
  const win = () => {
    if(data[1]===data[2] && data[2]===data[3] && data[3]!=="" ) {winner(data[3]); return;}
    if(data[1]===data[5] && data[5]===data[9] && data[9]!=="" ) {winner(data[9]); return;}
    if(data[1]===data[4] && data[4]===data[7] && data[7]!=="" ) {winner(data[7]); return;}
    if(data[4]===data[5] && data[5]===data[6] && data[6]!=="" ) {winner(data[6]); return;}
    if(data[7]===data[8] && data[8]===data[9] && data[9]!=="" ) {winner(data[9]); return;}
    if(data[7]===data[5] && data[5]===data[3] && data[3]!=="" ) {winner(data[3]); return;}
    if(data[2]===data[5] && data[5]===data[8] && data[8]!=="" ) {winner(data[8]); return;}
    if(data[3]===data[6] && data[6]===data[9] && data[9]!=="" ) {winner(data[9]); return;}
    if(count === 10) {winner("draw"); return;}
  }
  const winner = (winner) => {
    setLock(true);
    if(winner==="o")
      {checkWinner.current.innerHTML = `Winner: <img src='${circle_icon}'>`}
    else 
    {
      if(winner==="x") 
        {checkWinner.current.innerHTML = `Winner: <img src='${cross_icon}'>`}
      else
      if(winner==="draw")
      {
        checkWinner.current.innerHTML = `Draw`
      }
    }
  }
  const reset = () => {
    setLock(false);
    data=["","","","","","","","",""];
    checkWinner.current.innerHTML = `Tictactoe Game`;
    setCount(1)
    box_reset.map((e)=>(
      e.current.innerHTML = ""
    ))
  }
  
  return (
    <div className='container'>
      <h1 className="title" ref={checkWinner}>Tictactoe Game</h1>
      <div className='board'>
        <div className="row1">
          <div className="boxes" ref={boxReset1} onClick={(e)=>{toggle(e,1)}}></div>
          <div className="boxes" ref={boxReset2} onClick={(e)=>{toggle(e,2)}}></div>
          <div className="boxes" ref={boxReset3} onClick={(e)=>{toggle(e,3)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={boxReset4} onClick={(e)=>{toggle(e,4)}}></div>
          <div className="boxes" ref={boxReset5} onClick={(e)=>{toggle(e,5)}}></div>
          <div className="boxes" ref={boxReset6} onClick={(e)=>{toggle(e,6)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={boxReset7} onClick={(e)=>{toggle(e,7)}}></div>
          <div className="boxes" ref={boxReset8} onClick={(e)=>{toggle(e,8)}}></div>
          <div className="boxes" ref={boxReset9} onClick={(e)=>{toggle(e,9)}}></div>
        </div>
      </div>
      <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}
export default Tictactoe 