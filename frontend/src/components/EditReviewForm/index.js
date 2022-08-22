import React from "react"
import ReviewForm from "../ReviewForm"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
const EditReviewForm = () => {
    let {reviewId} = useParams()
    let review = useSelector(state=> state.reviews[reviewId])

    // const review = {
    //     review: '',
    //     stars: 1
    // }
    return (
        <ReviewForm spotId= {spotId} formType={"Edit Review"} review={review}/>
    )
}

export default EditReviewForm
