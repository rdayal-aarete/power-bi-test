import React from "react";
import logo from "../images/Logo.png";
import tag from "../images/Tagline.png";
import { itemsMap } from "../helper/Landingpage";

function Landing() {
  return (
    <div class="mt-20">
      <div class="flex  items-center justify-center">
        <img class="h-38.76 w-25 " src={logo} alt="logo" />
      </div>
      <h1 class="flex items-center justify-center text-xl font-normal leading-normal mt-20 mb-2 text-black ">
        Select Your Configuration
      </h1>
      <div class="flex flex-wrap  items-center justify-center mt-5  ">
        {itemsMap()}
      </div>
      <div class="flex items-center justify-center mt-20 ">
        <img class=" max-w-sm m-20" src={tag} alt="" />
      </div>
    </div>
  );
}

export default Landing;
