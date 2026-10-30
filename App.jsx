import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function card() {

 return (

<h1>Hello</h1>
 )
}


function App() {

  return  (

    <div>
    <h3 style ={{color: 'red', width:'300px', height:'300px', background:'blue'}}>Cristiano Ronaldo is a long-standing and close partner to Jacob & Co. He and Founder and Chairman Jacob Arabo have established a strong relationship based in trust and respect over the past twenty years.

    </h3>
    <h3 style ={{color: 'blue', width:'300px', height:'300px', background:'red'}}> Jacob Arabo met Cristiano Ronaldo when the Madeira-born football player was a promising rising star and their friendship has never failed ever since.
      
    </h3>
    <h3 style ={{color: 'green', width:'300px', height:'300px', background:'orange'}}>Both men immediately found common ground in their quest for excellence. They crafted their success from the ground up and achieved it through relentless determination and work.
      
    </h3>
    <h3 style ={{color: 'pink', width:'300px', height:'300px', background:'black'}}>Their relationship has now grown into a business venture in which Jacob & Co. designs and manufactures timepieces after the image of Cristiano Ronaldo, which are co-branded by both powerhouses.
      
    </h3>
    </div>
  )
}
export default App;