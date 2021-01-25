import React from "react";
import ThumbRating from "./ThumbRating.js";
import {FaTrash} from "react-icons/fa";

export default function Cake({id, title, color, rating, onRemove = f => f, onRate = f => f}) {

 return(<section>
    <h1>{title}</h1>
    <button onClick={()=> onRemove(id)}>
     <FaTrash/>
    </button>
    <div style={{height: 50, backgroundColor: color}} />
    <ThumbRating
    selectedThumbs={rating}
    onRate = {rating => onRate(id, rating)}
    />
  </section>
 );

}