import React, {useState,useEffect} from "react"
import ReviewForm from "../ReviewForm"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getUserReviews } from "../../store/review"

const EditReviewForm = () => {
    let {reviewId} = useParams()
    const dispatch = useDispatch()
    let review = useSelector(state=> state.reviews[reviewId])
    useEffect(()=>{
        dispatch(getUserReviews())
    }, [dispatch])

    // const review = {
    //     review: '',
    //     stars: 1
    // }
    return (
        <ReviewForm formType={"Edit Review"} reviewObj={review} />
    )
}

export default EditReviewForm
