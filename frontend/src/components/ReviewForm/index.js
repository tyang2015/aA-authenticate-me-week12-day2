import React from "react"
import {useParams, useHistory} from "react-router-dom"
import {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import Star from "../Star"
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
    // let [stars, setStars] = useState(1)
    // let [star5, setStar5] = useState(false)
    // let [star4, setStar4] = useState(false)

    useEffect(()=>{
        console.log('star rating value:', rating)
    }, [rating])

    const handleSubmit =e=> {
        e.preventDefault();
        alert('testing submit, not finalized')
        // review = {
        //     ...review,
        //     rating
        // }
    }

    const handleClickStar = e => {
        console.log('after clicking star:', e.target.value)
    }

    return (
        <div className="review-main-container">
            <form onSubmit={handleSubmit}>
                <h2>{formType}</h2>
                <div>
                    <label for="review-content">Leave a public review</label>
                    <textarea placeholder="Say a few words about the owner's stay" id='review-content' name='review-content'/>
                </div>
                <div className="rating">
                    {/* <button> */}
                        {[1,2,3,4,5].map( (arrayNum)=> (
                            // <Star value={arrayNum} filled={arrayNum<=rating} key={arrayNum} onChange={(e)=>setRating(e.target.value)}/>
                            <Star value={arrayNum} onClick={handleClickStar} filled={arrayNum<=rating} key={arrayNum} setRating={setRating}/>
                        ))}
                    {/* </button> */}
                </div>
                <button type="submit" className="submit-button">Submit review</button>
            </form>
        </div>
    )
}

export default ReviewForm
