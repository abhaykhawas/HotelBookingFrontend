import React, {useState, useEffect, useContext} from 'react';
import { useSearchParams } from 'react-router-dom';
import HotelContext from '../../HotelContext';
import './Listing.css';

function Listing() {
  const [searchParams] = useSearchParams();
  const { hotels, bookHotel } = useContext(HotelContext);
  const [filterHotels, setFilterHotels] = useState([])
  const [bookModal, setBookModal] = useState(false)
  const [bookingInfo, setBookingInfo] = useState({})

  const location = searchParams.get('location') || ""
  const from = searchParams.get('from') || ""
  const to = searchParams.get('to') || ""

  const [fromDate, setFromDate] = useState(from)
  const [toDate, setToDate] = useState(to)
  useEffect(() => {
    
    console.log(location)
    const filtered = hotels.filter((hotel) => (
      
      hotel.location.toLowerCase().includes(location.toLowerCase())
    ))

    setFilterHotels(filtered)
  }, [])


  function handlePreBook(hotel) {
    setBookModal(true)
    setBookingInfo(hotel)
  }

  function handleCloseModal() {
    setBookModal(false)
    setBookingInfo({})
  }

  function handleBook(){
    bookHotel(bookingInfo, fromDate, toDate)
    setBookModal(false)
    setBookingInfo({})
  }

  return (
    <div className="listing-container">
      {
        bookModal ? (
          <div className="book-modal-container">
            <div className="close-modal-container">
              <h3 onClick={() => handleCloseModal()}>❌</h3>
            </div>
            <hr />
            <br />
            <div className="hotel-info-container">
              <h3>{bookingInfo.name}</h3>
              <p>{bookingInfo.location}</p>
              <p>{bookingInfo.price}</p>
            </div>
            <br />
            <div className="dates-container">
              <div className="from-container">
                <label>From</label>
                <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)}/>
              </div>
              <div className="to-container">
                <label>To</label>
                <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)}/>
              </div>
            </div>
            <hr />
            <br />
            <div className="book-final-container">
              <button onClick={handleBook}>BOOK YOUR DREAM</button>
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
              <button onClick={() => handlePreBook(e)}>Book Now !</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Listing