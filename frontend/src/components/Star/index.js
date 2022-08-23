import { FaStar } from "react-icons/fa";
import React from "react"
import "./Star.css"


const Star = ({filled, value, onClick, onMouseEnter, onMouseLeave}) => {
    return (
        <label>
            <input type='radio' id='rating' required="required"/>
            <FaStar color={filled? "orange": "lightgray"}
                onClick={onClick}
                // onChange={onClick}
                value={value}
                className='star'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />
        </label>
    )
}
 export default Star
