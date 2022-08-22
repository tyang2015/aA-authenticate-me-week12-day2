import React from "react"
import {useParams, useHistory} from "react-router-dom"
import {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

// import {crea}

// create a review base on following restrictions:
// already have a review for spot => spot.r
// never booked for spot
// in both cases:
const ReviewForm = ({review, spotId, formType}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    let [reviewContent, setReviewContent] = useState('')
    const [rating, setRating] = useState(0);
    let [stars, setStars] = useState(1)
    let [star5, setStar5] = useState(false)
    let [star4, setStar4] = useState(false)

    return (
        <form onSubmit={handleSubmit}>
            <h2>{formType}</h2>
            <div>
                <label for="review-content">Leave a public review</label>
                <textarea placeholder="Say a few words about the owner's stay" id='review-content' name='review-content'/>
            </div>
            <div className="rating">
                {Array(5).fill().map( (star, index)=> (
                    <Star filled={false} key={index}/>
                ))}
                {/* <label for="star5">☆</label>
                <input id="star5" name="star" type="radio"
                value="5" class="radio-btn hide" />
                <label for="star4">☆</label>
                <input id="star4" name="star" type="radio" value="4" class="radio-btn hide" />
                <label for="star3">☆</label>
                <input id="star3" name="star" type="radio" value="3" class="radio-btn hide" />
                <label for="star2">☆</label>
                <input id="star2" name="star" type="radio" value="2" class="radio-btn hide" />
                <label for="star1">☆</label>
                <input id="star1" name="star" type="radio" value="1" class="radio-btn hide" />
                <div class="clear"></div> */}
            </div>
        </form>
    )
}

export default ReviewForm
