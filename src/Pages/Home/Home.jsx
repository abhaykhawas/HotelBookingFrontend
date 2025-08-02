import React, {use, useState} from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate = useNavigate()
    const [location, setLocation] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const handleSearch = () => {
        // console.log("Check", location, from, to)
        navigate(`/listings?location=${location}&from=${from}&to=${to}`)
    }

    return (
        <div className='home-container'>
            <h1>Go ahead and book your next palace</h1>
            <div className="search-container">
                <div className="search-location-container">
                    <h3>⚓</h3>
                    <div className="search-location-search-container">
                        <p>Location</p>
                        <input type="text" placeholder='Search your location' value={location} onChange={(e) => setLocation(e.target.value)}/>
                    </div>
                </div>
                <div className='h-line'>|</div>
                <div className="search-date-from-container">
                    <h3>📅</h3>
                    <div className="search-location-search-container">
                        <p>From</p>
                        <input type="date" value={from} onChange={(e) => setFrom(e.target.value)}/>
                    </div>
                </div>
                <div className='h-line'>|</div>
                <div className="search-date-to-container">
                    <h3>📅</h3>
                    <div className="search-location-search-container">
                        <p>To</p>
                        <input type="date" value={to} onChange={(e) => setTo(e.target.value)}/>
                    </div>
                </div>
                <button onClick={handleSearch}>SEARCH</button>
            </div>
        </div>
    )
}

export default Home