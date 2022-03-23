import React from "react";

const Card = (props) => (
  <div>
    <div class="flex flex-col bg-white m-2 overflow-hidden max-w-sm rounded shadow-lg max-w-sm bg-white-500 hover:bg-blue-500 active:bg-blue-500 ">
      <img src={props.image} alt="" class="h-38.76 w-138.79 m-10" />
    </div>
  </div>
);

export default Card;
