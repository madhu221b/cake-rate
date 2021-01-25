import React from "react";
import Cake from './Cake.js';

export default function CakeList({cakes = [], onRemoveCake=f=>f, onRateCake=f=>f}) {
 if(!cakes.length) return <div>No Cakes listed. (Add a cake)</div>;

 return(
 <div>
   {
   cakes.map((cake) => <Cake key={cake.id} {...cake} onRemove={onRemoveCake} onRate={onRateCake}/>)
   }
  </div>
);
}