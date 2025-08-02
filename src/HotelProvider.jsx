import { useState } from "react";
import HotelContext from "./HotelContext";

const sampleHotels = [
  { id: 1, name: 'Grand Palace Hotel', price: 120, location: 'New York' },
  { id: 2, name: 'Sunrise Suites', price: 85, location: 'Los Angeles' },
  { id: 3, name: 'Ocean Breeze Inn', price: 95, location: 'Miami' },
  { id: 4, name: 'Mountain Retreat', price: 110, location: 'Denver' },
  { id: 5, name: 'City Lights Hotel', price: 140, location: 'Chicago' },
  { id: 6, name: 'Desert Oasis', price: 75, location: 'Phoenix' },
  { id: 7, name: 'Lakeside Lodge', price: 100, location: 'Minneapolis' },
  { id: 8, name: 'The Royal Stay', price: 130, location: 'Boston' },
  { id: 9, name: 'Seaside Escape', price: 90, location: 'San Diego' },
  { id: 10, name: 'Urban Comfort Inn', price: 105, location: 'Seattle' },
  { id: 11, name: 'Maple Inn', price: 88, location: 'Toronto' },
  { id: 12, name: 'The Cozy Corner', price: 70, location: 'Nashville' },
  { id: 13, name: 'Empire View Hotel', price: 115, location: 'New York' },
  { id: 14, name: 'Palm Tree Resort', price: 125, location: 'Honolulu' },
  { id: 15, name: 'Historic Haven', price: 110, location: 'Philadelphia' },
  { id: 16, name: 'Downtown Comforts', price: 98, location: 'Atlanta' },
  { id: 17, name: 'The Quiet Quarters', price: 77, location: 'Austin' },
  { id: 18, name: 'Luxury Loft Inn', price: 145, location: 'San Francisco' },
  { id: 19, name: 'Forest Edge Hotel', price: 95, location: 'Portland' },
  { id: 20, name: 'Skyline Suites', price: 155, location: 'Dallas' },
  { id: 21, name: 'Tropical Dreams Resort', price: 160, location: 'Orlando' },
  { id: 22, name: 'Riverfront Hotel', price: 105, location: 'New Orleans' },
  { id: 23, name: 'Modern Escape', price: 125, location: 'Las Vegas' },
  { id: 24, name: 'Historic Inn', price: 85, location: 'Charleston' },
  { id: 25, name: 'Winter Lodge', price: 100, location: 'Salt Lake City' },
  { id: 26, name: 'Garden Grove Hotel', price: 92, location: 'Sacramento' },
  { id: 27, name: 'Capitol Stay', price: 130, location: 'Washington DC' },
  { id: 28, name: 'Sunset Blvd Inn', price: 115, location: 'Los Angeles' },
  { id: 29, name: 'The Harbor Inn', price: 108, location: 'Baltimore' },
  { id: 30, name: 'Starlight Hotel', price: 138, location: 'San Jose' },
  { id: 31, name: 'Golden Gate Lodge', price: 145, location: 'San Francisco' },
  { id: 32, name: 'Evergreen Retreat', price: 120, location: 'Vancouver' },
  { id: 33, name: 'Rocky Peaks Inn', price: 98, location: 'Calgary' },
  { id: 34, name: 'Harbor View Suites', price: 125, location: 'Tampa' },
  { id: 35, name: 'The Pine Inn', price: 83, location: 'Boise' },
  { id: 36, name: 'Bayfront Inn', price: 112, location: 'San Diego' },
  { id: 37, name: 'Sky High Hotel', price: 150, location: 'Denver' },
  { id: 38, name: 'Timberline Lodge', price: 102, location: 'Anchorage' },
  { id: 39, name: 'The Jetty Inn', price: 89, location: 'Portland' },
  { id: 40, name: 'Summit Hotel', price: 133, location: 'Phoenix' },
  { id: 41, name: 'Metro Inn', price: 87, location: 'Detroit' },
  { id: 42, name: 'Island View Hotel', price: 140, location: 'Key West' },
  { id: 43, name: 'Windy City Stay', price: 119, location: 'Chicago' },
  { id: 44, name: 'Prairie View Inn', price: 92, location: 'Omaha' },
  { id: 45, name: 'Lighthouse Hotel', price: 104, location: 'Newport' },
  { id: 46, name: 'Blue Lagoon Inn', price: 111, location: 'Miami' },
  { id: 47, name: 'The Capital Hotel', price: 129, location: 'Austin' },
  { id: 48, name: 'Redwood Retreat', price: 96, location: 'San Jose' },
  { id: 49, name: 'The Colonial Inn', price: 86, location: 'Richmond' },
  { id: 50, name: 'Pearl District Suites', price: 137, location: 'Portland' }
];


const HotelProvider = ({children}) => {
    const [hotels] = useState(sampleHotels)
    const [bookings, setBookings] = useState([])

    const bookHotel = (hotel, from, to) => {
        setBookings([...bookings, { ...hotel, from, to, bookingId: Date.now() }])
    }

    const deleteBooking = (bookingId) => {
        setBookings(bookings.filter((booking) => booking.bookingId !== bookingId))
    }

    return(
        <HotelContext.Provider value={{hotels, bookings, bookHotel, deleteBooking}}>
            {children}
        </HotelContext.Provider>
    )
}

export default HotelProvider;