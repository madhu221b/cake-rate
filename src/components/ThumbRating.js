import React, {useState} from "react";
import Thumb from './Thumb.js';

const createArray = length => [...Array(length)] ;

export default function ThumbRating({totalThumbs = 5, selectedThumbs = 0 , onRate = f => f}) {


   return(
   <div>
   {createArray(totalThumbs).map((n, i) =>
   (<Thumb key={i} selected={selectedThumbs > i} onSelect={() => onRate(i+1)}/>
   ))}
   <p>
    {selectedThumbs} of {totalThumbs} thumbs
   </p>
   </div>
   );
}