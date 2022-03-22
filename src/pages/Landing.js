import React from 'react'
import Card from '../Components/Card';
import icon1 from '../images/power-bi.png'
import icon2 from '../images/tableau.png'
import icon3 from '../images/microStrategy.png'
import logo from '../images/Logo.png'
import tag from '../images/Tagline.png'


function Landing() {
  return (
      <div class="mt-20">
    <div class="flex  items-center justify-center">
    <img class="h-38.76 w-25 "src={logo} alt="logo"/>
    </div>
  <h1 class="flex items-center justify-center w-390px h-32px mt-10 ">Select Your Configuration</h1>
  <div class="flex flex-wrap  items-center justify-center  ">
    <Card icon={icon1}/>
    <Card icon={icon2}/>
    <Card icon={icon3}/>
    </div>
    <div class="flex items-center justify-center mt-20 ">
            <img class="h-38.76 w-25" src={tag} alt=""/>
        </div>
    </div>
  )
}

export default Landing