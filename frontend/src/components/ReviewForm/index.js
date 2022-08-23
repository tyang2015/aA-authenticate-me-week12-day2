import React from "react"
import {useParams, useHistory} from "react-router-dom"
import {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import Star from "../Star"
import { createSpotReview, editReview } from "../../store/review"
// import {crea}

// create a review base on following restrictions:
// already have a review for spot => spot.r
// never booked for spot
// in both cases:
const ReviewForm = ({reviews,reviewObj, spotId, formType}) => {
    const dispatch = useDispatch();
    const history= useHistory();
    const sessionUser = useSelector(state => state.session.user);
    let [review, setReview] = useState('')

    const [stars, setStars] = useState(null);
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [hover, setHover] = useState(null);
    const [validationErrors, setValidationErrors] = useState([])
    // let reviewArr= Object.values(reviews)
    // console.log('reviews in form:', reviews)
    // console.log('current user id:', sessionUser.id)
    // console.log('sessionUser in review form:', sessionUser)
    // if (!sessionUser) history.push('/')
    useEffect(()=>{
        let errors =[]
        if (!stars || stars<1 || stars>5) errors.push("Star rating must be integer from 1 to 5")
        if (reviews){
            for (let i = 0; i< reviews.length;i++){
                let currReview= reviews[i]
                if (!sessionUser){
                    // alert('please login to write a review')
                    return
                }
                else if (sessionUser.id === currReview.userId){
                    errors.push("User already has a review for this spot")
                }
            }
        }
        if (review.length>500) errors.push("Review must be less than 500 characters")
        setValidationErrors(errors)

    }, [review, stars])

    const handleSubmit =e=> {
        e.preventDefault();
        // alert('testing submit, not finalized')
        setHasSubmitted(true)
        if (!sessionUser){
            alert('Please login to write a review')
            return
        }
        if (validationErrors.length>0){
            alert("Cannot submit review form!")
            return
        }

        reviewObj = {
            ...reviewObj,
            stars,
            review
        }
        console.log('review obj after revision:', reviewObj)
        if (formType==="Create Review"){
            dispatch(createSpotReview(spotId, reviewObj))
            alert('successfully submitted review!')
            setHasSubmitted(false)
            setStars(null)
            setReview('')
            return
        } else {
            // console.log('TO DO')
            console.log('in correct formType')
            dispatch(editReview(reviewObj))
            alert('review has been updated!')
            setHasSubmitted(false)
            setStars(null)
            setReview('')
            return
        }
    }

    return (
        <>
            {validationErrors.length>0 && hasSubmitted && (
                <div>
                    The following errors were found:
                    <ul className='validation-errors'>
                        {validationErrors.map((error) => (
                        <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="review-main-container">
                <form onSubmit={handleSubmit}>
                    <h2>{formType}</h2>
                    <div>
                        <label for="review-content">Leave a public review</label>
                        <textarea placeholder="Say a few words about the owner's stay"
                         type="textarea"
                         id='review-content'
                         name='review-content'
                         style={{width:"200px", height: "200px"}}
                         onChange={e=>setReview(e.target.value)}
                         value={review}
                         />
                    </div>
                    <div>
                        {/* after we click we setRating (rating) to new value.
                        compare this to ratingValue star input */}
                        {[1,2,3,4,5].map( (ratingValue)=> (
                            <Star
                                value={ratingValue}
                                onClick={()=> setStars(ratingValue)}
                                filled={ratingValue <= hover || ratingValue<=stars}
                                key={ratingValue}
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={()=>setHover(null)}
                            />
                        ))}
                    </div>
                    <button type="submit" className="submit-button">Submit review</button>
                </form>
            </div>
        </>
    )
}

export default ReviewForm
