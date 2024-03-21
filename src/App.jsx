import { useState } from 'react'

import './App.css'
import heroImage from '../src/assets/hero-removebg-preview.png';


function App() {
  const[height , setHeight]= useState("")
  const[weight , setWeight]= useState("")
  const [bmi , setBmi] = useState(null)
  const[bmistatus , setBmistatus]= useState("")
  const [error , setError] = useState("")


 function calculate(params) {
     const isvheight = /^\d+$/.test(height)
     const isvweight = /^\d+$/.test(weight)
 
    if (isvheight && isvweight) {
      const hinmeters = height/100;
      const bmivalue = weight / (hinmeters * hinmeters);
      setBmi(bmivalue.toFixed(2));
      if (bmivalue < 18.5) {
        setBmistatus("Under Weight")
      } else if (bmivalue >= 18.5 && bmivalue < 29.9){
        setBmistatus("Normal Weight")
      }
      else if (bmivalue >= 25 && bmivalue < 24.9){
        setBmistatus("Over Weight")
      } else{
        setBmistatus("Obese")
      }
      let clearbtn = document.querySelector(".clear-button")
       clearbtn.style.display="flex"

       setError("")
     
    
    
      
    } else {
      setError("please enter valid Numeric values for Height and Weight")
      setBmi(null)
      setBmistatus("")
      // alert("hello")
      // alert("please enter valid numeric for Height and Weight")
      clearbtn.style.display="none"
     
      
    
   
     
    }
 
  


 }
 function clearbutton(params) {
 
  setBmi(null)
  setBmistatus("")
  setHeight("")
  setWeight("")
  setError("")
      
  let clearbtn = document.querySelector(".clear-button")
  clearbtn.style.display="none"

 
 }
 


  return ( 
    <div>
       
       <div className="main-bmi">
        <div className='main-img'>
          <img src={heroImage} alt="" />
        </div>
        <div className="bmi-content">
          <div> <h1>BMI Calculator</h1></div>
          
         <div className='main-input'>
         
         <div>
          <p id='input-valid'>{error}</p>
          <div  className="height">
          <label htmlFor="">Height in CM</label>
            <input type="text" value={height}  onChange={(e)=>setHeight(e.target.value)}/>
          </div>
            
          </div>
          <div className="weight">
            <label htmlFor="">Weight in KG</label>
            <input type="text" value={weight}  onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <div className="button-div">
            <button onClick={calculate}>Calculate BMI</button>
            <button className='clear-button' onClick={clearbutton}>Clear</button>
          </div>
          {/* <div className="bmi-answer">
            <h3>Your BMI is :</h3>
            <h3> Status : {bmistatus}</h3>
          </div> */}
          {
            bmi !== null && (
              <div className="bmi-answer">
            <h3>Your BMI is : {bmi}</h3>
            <h3> Status : {bmistatus}</h3>
          </div>
            )
          }
         </div>

        </div>
       </div>
     
    </div>
       
  )
}

export default App
