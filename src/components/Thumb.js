import React from "react";
import {FaThumbsUp} from "react-icons/fa";

export default function Thumb({selected=false, onSelect = f=>f}){

   return <FaThumbsUp color={selected ? "green" : "grey"} onClick={onSelect}/>;
}