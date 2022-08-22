import "./GetReviews.css"
import React,{useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import  {getSpotReviews}  from "../../store/review";
import { NavLink, useParams } from "react-router-dom";


const GetReviews = () =>{
    let {spotId}= useParams();
    let reviews = useSelector(state=> Object.values(state.reviews))
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSpotReviews(spotId))
    }, [dispatch])
    // console.log('reviews:', reviews)
    return (
        <div>
            {reviews.length>0 && (
                <div className="reviews-main-container">
                    <div className="review-header-container">
                        {reviews.length} reviews
                    </div>
                    <div>
                        {reviews.map(review=> (
                            <>
                                {/* <h3>{review.User?.firstName}</h3> */}
                                <div className="user-review-profile-icon-container">
                                    {review.User.firstName}
                                </div>
                                <div className="review-card-container" style={{backgroundColor: 'aqua'}}>
                                    <p>{review.review}</p>
                                </div>
                            </>
                        ))}
                    </div>
                    <NavLink to={`/spots/${spotId}/reviews/new`}>
                        Create a Review
                    </NavLink>
                </div>
            )}
        </div>
    )
}

export default GetReviews
