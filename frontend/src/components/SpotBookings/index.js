import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import { getBookings } from '../../store/booking'
import { useParams } from 'react-router-dom'
import React from 'react'
import './SpotBookings.css'

// TODO: change backend to do a joined table with users and get the firstName of user to be rendered on page
const SpotBookings = ({bookings})=>{
    let {spotId} = useParams();
    const allBookings = Object.values(bookings)
    const bookingsForSpot = allBookings.filter(booking=> booking.spotId === Number(spotId))
    const firstBooking = bookingsForSpot[0]
    console.log('first booking:',firstBooking)
    return (
        <>
            {firstBooking && (
                <div className= 'spot-bookings-title-container'>
                    <i class="fa-solid fa-house"></i>
                    <h2> Bookings for: {firstBooking.Spot.name} </h2>
                </div>
            )}
            <div>
                <div className={`spot-bookings-images-container`}>
                    {firstBooking && (<img src={`${firstBooking.Spot.previewImage}`} />)}
                    {firstBooking && (<img src={`${firstBooking.Spot.previewImage}`} />)}
                    {firstBooking && (<img src={`${firstBooking.Spot.previewImage}`} />)}
                </div>
                <div className='spot-bookings-grid-container'>
                    {bookingsForSpot.map(booking=> (
                        <div className={`booking-detail-card`} key={booking.id} >
                            <h2> Booking #{booking.id}</h2>
                            <p> Hosted by Owner {booking.Spot.ownerId}</p>
                            <p> {booking.startDate} ➣ {booking.endDate}</p>
                            {/* <p> To: {booking.endDate}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SpotBookings
