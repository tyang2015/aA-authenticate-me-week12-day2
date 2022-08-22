import { FaStar } from "react-icons/fa";
import React from "react"


const Star = ({filled, setRating, value, onClick}) => {
    return (
        <div>
            <FaStar color={filled? "orange": "lightgray"}
            onClick
            onChange={()=> setRating(value)}
            // value={value}
            />
        </div>
    )
}
 export default Star
