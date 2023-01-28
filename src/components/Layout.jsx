import React from 'react';
import { useState } from 'react';
import Numbers from './Numbers';
import Signs from './Signs';
import Functions from './Functions';
import LayoutCover from './LayoutCover';


function Layout() {
     const [number1, setNumber1] = useState([])
     const [number2, setNumber2] = useState([])
     const [finalNum1, setFinalNum1] = useState(0)
     const [finalNum2, setFinalNum2] = useState()
     const [finalAnswer, setFinalAnswer] = useState(0)
     const [sign, setSign] = useState("")
     const [coverOn, setCoverOn] = useState("")
     const coverToggle = () =>{
          if(coverOn === "" || coverOn === "coverOn"){
               setCoverOn("coverOff")
          } else{
               setCoverOn("coverOn")
          }
     }

     function findSqr() {
          let num1, num2, avg
          let counter = 0
          num1 = (finalNum1 + 1) /2
          do{
               num2 = finalNum1 / num1
               avg = (num1 + num2 ) / 2
               num1 = finalNum1 / avg
               num2  = finalNum1 / num1 
               avg = ( num1 + num2 ) /2 
               counter++
          } while(counter !== 100)
          setFinalAnswer(avg)
          
     } 
     const getNum = (e) =>{
          if(sign === "" && finalAnswer && e.target.innerHTML === "Ans"){
               setFinalNum1(finalAnswer)
          }
          else if(sign === "") {
               setFinalNum1(0)
               let newNumber = number1;
               newNumber.push(e.target.innerHTML) 
               setNumber1(newNumber)
               let temp1 = newNumber.join("")
               console.log(typeof temp1)
               switch(temp1){
                    case "Ans":
                         setFinalNum1(finalAnswer);
                         break;
                    default:
                         setFinalNum1(+temp1)
                         console.log(typeof +temp1)
               }
               
          } else if(sign !== "" && finalNum2 && e.target.innerHTML === "Ans" && finalAnswer){
               setFinalNum1(finalAnswer)
               setFinalNum2()
               setSign("")
          }
          else{
               let newNumber2 = number2
               newNumber2.push(+e.target.innerHTML)
               setFinalNum2(newNumber2.join(""))
          }

     }
     const getSign = (s) =>{
          let opSign = s.target.innerHTML
          if(opSign === "+" || opSign === "-" || opSign === "x" || opSign === "/"){
               setSign(s.target.innerHTML)
          } else if(opSign === "=" && sign !== ""){
               let ans ;
               switch(sign){
                    case "+" :
                         ans = (+finalNum1) + (+finalNum2);
                    break;
                    case "-" :
                         ans = (+finalNum1) - (+finalNum2);
                    break;
                    case "x" :
                         ans = (+finalNum1) * (+finalNum2);
                    break;
                    case "/" :
                         ans = (+finalNum1) / (+finalNum2);
                    break;
                         default: ans = 0
               }
               setFinalAnswer(ans)
          } else if(opSign === "=" && sign === ""){
               setFinalAnswer(finalNum1)
          }
     }

     const deleteNum = () =>{
          if(finalNum2 === "" && sign === ""){
               let sampleNum = number1;
               sampleNum.pop();
               setFinalNum1(sampleNum.join("") || 0 )
     
          }else if(finalNum2 === "" && sign !== "" ){
               setSign("")
          }else{
               let sampleNum2 = number2;
               sampleNum2.pop();
               setFinalNum2(sampleNum2.join(""))
          }
     }

     const resetNums = () =>{
          setNumber1([])
          setNumber2([])
          setFinalNum1(0);
          setFinalNum2('')
          setFinalAnswer(0)
          setSign('')
     } 

     const returnAns = (e) =>{
          if(finalNum1 !== 0 && sign === ""){
               let operator = e.target.innerHTML;
               let temp;
               console.log(operator)
               switch(operator){
                    case "x2":
                         temp = finalNum1 * finalNum1;
                         setFinalAnswer(temp)
                         break;
                    case "sqr":
                         findSqr()
                         break;
                    default:
                         setFinalAnswer(0)
               }
          }else if(finalNum1 && finalNum2 ){
               getSign()
               

          }
     }

  return (
     <>
          <div className='calc-layout'>
               <div className='user-input answer'>
                    <h3>{finalNum1} {sign} {finalNum2}</h3>
                    <h2>{finalAnswer}</h2>
               </div>
               <div className='control-buttons'>
                    <button className='control-btn' onClick={coverToggle}>Close</button> <button className='control-btn delete-btn' onClick={deleteNum} >Del</button><button className='control-btn reset-btn' onClick={resetNums}>Reset</button>
               </div>
               <Functions getchildCont={returnAns} />
               <div className='content'>
                    <Numbers getNumeral = {getNum} />
                    <Signs getSignal = {getSign} />
               </div>
          <LayoutCover styleClass={coverOn} removeCover={coverToggle} />
          </div>
     </>
  )
}

export default Layout;