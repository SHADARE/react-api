
import { useState } from "react";
import './Api.css';


const Advice = () => {

 const [advice, setadvice] = useState('');


 async function adviceTips() {

 const response = await fetch('https://api.adviceslip.com/advice');

 const data = await response.json();

 const checkdata = data.slip;

 console.log(checkdata.advice);

 setadvice(checkdata.advice);

 }

 return (

 <div className="container">

 <h1>Get Advice</h1>

 <p>{advice}</p>

 <button onClick={adviceTips}>Click me</button>

 </div>

 )

 }




 export default Advice



