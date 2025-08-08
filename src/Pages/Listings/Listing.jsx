import React, {useState, useEffect, useContext} from 'react';
import { useSearchParams } from 'react-router-dom';
import HotelContext from '../../HotelContext';
import './Listing.css';

function Listing() {
  const [searchParams] = useSearchParams();
  const { hotels, bookHotel } = useContext(HotelContext);
  const [filterHotels, setFilterHotels] = useState([])
  const [bookModal, setBookModal] = useState(false)

  useEffect(() => {
    const location = searchParams.get('location') || ""
    const from = searchParams.get('from') || ""
    const to = searchParams.get('to') || ""
    console.log(location)
    const filtered = hotels.filter((hotel) => (
      
      hotel.location.toLowerCase().includes(location.toLowerCase())
    ))

    setFilterHotels(filtered)
  }, [])

  return (
    <div className="listing-container">
      {
        bookModal ? (
          <div className="book-modal-container">
            <div className="close-modal-container">
              <h3 onClick={() => setBookModal(false)}>❌</h3>
            </div>
            <hr />
            <br />
            <div className="dates-container">
              <div className="from-container">
                <label>From</label>
                <input type="date" />
              </div>
              <div className="to-container">
                <label>To</label>
                <input type="date" />
              </div>
            </div>
            <hr />
            <br />
            <div className="book-final-container">
              <button>BOOK YOUR DREAM</button>
            </div>
          </div>
        ) : null
      }
      <h2 className='h2-list-head'>Your Dream Hotels</h2>
      <div className="hotel-card-container">
        {filterHotels.map((e,i) => (
          <div className="hotel-card" key={e.id}>
            <div className="hotel-card-info">
              <h2>{e.name}</h2>
              <p>{e.location}</p>
              <p>${e.price}</p>
            </div>
            <div className="hotel-book-container">
              <button onClick={() => setBookModal(true)}>Book Now !</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Listing