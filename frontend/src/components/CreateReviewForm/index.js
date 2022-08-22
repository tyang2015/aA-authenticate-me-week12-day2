import React from "react"
import ReviewForm from "../ReviewForm"
import { useParams } from "react-router-dom"
// import ReviewForm from "../ReviewForm"

const CreateReviewForm = () => {
    let {spotId} = useParams()
    const review = {
        review: '',
        stars: 1
    }
    return (
        <ReviewForm spotId= {spotId} formType={"Create Review"} review={review}/>
    )
}

export default CreateReviewForm
