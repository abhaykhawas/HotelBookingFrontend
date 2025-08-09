import React, {useContext} from 'react'
import './Bookings.css'
import HotelContext from '../../HotelContext';

function Bookings() {
  const { bookings, deleteBooking } = useContext(HotelContext);
  return (
    <div className='booking-container'>
      <h2>My Bookings</h2>
      <div className="booking-card-container">
      {
        bookings.length === 0 ? (
          <div className='no-booking-container'>
            <h1>No Booking Yet</h1>
            <h2>Go ahead and Book now !! </h2>
          </div>
        ) : (
          bookings.map((booking, i) => (
            <div className='booking-card'>
              <div className='booking-card-info'>
                <h3>{booking.name}</h3>
                <p>{booking.location}</p>
                <p>{booking.price}</p>
                <p>From : {booking.from} To : {booking.to}</p>
              </div>

              <div className='booking-card-button'>
                <button onClick={() => deleteBooking(booking.bookingId)}>Delete Booking</button>
              </div>
            </div>
          ))
        )
      }
      </div>

    </div>
  )
}

export default Bookings