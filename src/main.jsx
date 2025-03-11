// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { forwardRef } from 'react'


const rootElement = document.getElementById('root')
const rootDom = createRoot(rootElement)

// all the above things are basic js 

const paragraph = <p>Lorem ipsum dolor sit amet.</p>
const firstName = "Ravi";
const age = 25;
const LastName = "Negi";
const h4Style = {color: "white", backgroundColor: "red", display: "inline", padding: "4px 10px"}

rootDom.render(
  // these are fragments <>
  <> 
    {/* inttead of class we use classname here   */}
    <h1 className='heading name title '>Hello Negi</h1>   {/* // this is actually jsx - instead of js we use file name .jsx */}
    <h2>Hey negi here </h2>
    {paragraph}   {/* so the paragraph is now is a expression becouse it is now in a variable so to render and expression we do this */}
    <h2>Hey bro, My name is : {firstName} </h2>
    {LastName && <h3>Hey bro, My age is :  { age >= 25 ? age : ''}</h3>}  
    {/* to check wheter the user insert the lastname or not if not then don't show the above line  */}

    {/* so there are 2 ways to conditional expression rendering both are write down above  */}

    <h4 style={{color: "white", backgroundColor: "red", display: "inline", padding: "4px 10px"}}>To pass objects in react</h4>
    {/* so we passing style as a js objects  */}
    <h4 style={h4Style}>To pass objects in react</h4>
    {/* so here we pass as a expression that same thing  */}
  </>
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <h1>Hello Again</h1>  // this is actually jsx - instead of js we use file name .jsx
//   </StrictMode>,
// )

const buttonStyle = {color: 'black', backgroundColor: "#7fff00", padding: '8px 20px', borderRadius : "5px", margin: "15px 0px", border: "none", fontWeight: "bold"}
createRoot(document.getElementById('root')).render(
  <>

    <img style={{width: '50px', margin: "40px 0px 0px"}} src="vite.svg" alt=""/>
    <h1>Hi, I am a React <span style={{color: "#7fff00"}} ><u>Developer</u></span></h1>

    <h2>My name is Ravinder</h2>

    <ul style={{listStyle: "number"}}>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum.</li>
    </ul>

    <button style={buttonStyle}>
      Hire me &rarr;	
    </button>
  </>
)