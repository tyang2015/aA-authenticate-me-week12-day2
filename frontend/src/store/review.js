import { csrfFetch } from "./csrf";
const GET_SPOT_REVIEWS = 'reviews/getSpotReviews'
const CREATE_SPOT_REVIEW = 'reviews/createSpotReview'
const EDIT_REVIEW ='reviews/editReview'

const GET_USER_REVIEWS = 'reviews/getUserReviews'

const load = (payload) => {
    return {
        type: GET_SPOT_REVIEWS,
        payload
    }
}

const createBySpot = (review) =>{
    return {
        type: CREATE_SPOT_REVIEW,
        review
    }
}

export const getSpotReviews = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`)
    if (response.ok){
        let reviews= await response.json()
        dispatch(load(reviews))
    }
}

export const createSpotReview = (spotId, payload) => async dispatch => {
    const response = await fetch(`/api/spots/${spotId}/reviews`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)

    })
    if (response.ok){
        const review = await response.json()
        dispatch(createBySpot(review))
    }
}

// const GET_BOOKINGS = 'bookings/getBookings';
// const CREATE_BOOKING = 'bookings/createBooking';
// const EDIT_BOOKING= 'bookings/editBooking';
// const DELETE_BOOKING= 'bookings/deleteBooking';

const initialState={}
const reviewReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_SPOT_REVIEWS: {
            let newState = {}
           action.payload.reviews.forEach(review=> newState[review.id] = review)
            return newState
        }
        case CREATE_SPOT_REVIEW: {
            let newState = {...state}
            newState = state[action.review.id] = action.review
            return newState
        }
        default: {
            return state
        }

    }
}

export default reviewReducer
