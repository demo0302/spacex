import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './tour-card.css';
import calculateAvgRating from '../utils/avgRating';
import defaultImage from '../assets/images/hero-img01.jpg'; // Import default image

const TourCard = ({ tour }) => {
   // Handle undefined or null tour data
   if (!tour) {
      return <h4>Loading tour details...</h4>;
   }

   // Extract tour details with default values
   const { _id, title = "Unknown Tour", city = "Unknown City", photo, price = "N/A", featured, reviews = [] } = tour;

   // Ensure `reviews` exists before calculating ratings
   const { totalRating, avgRating } = calculateAvgRating(reviews || []);

   return (
      <div className='tour__card'>
         <Card>

            <CardBody>
               <div className="card__top d-flex align-items-center justify-content-between">
                  <span className="tour__location d-flex align-items-center gap-1">
                     <i className='ri-map-pin-line'></i> {city}
                  </span>
                  <span className="tour__rating d-flex align-items-center gap-1">
                     <i className='ri-star-fill'></i> {avgRating > 0 ? avgRating : "No Ratings"}
                     {totalRating > 0 ? <span>({reviews.length})</span> : null}
                  </span>
               </div>

               <h5 className='tour__title'>
                  <Link to={`/tours/${_id}`}>{title}</Link>
               </h5>

               <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                  <h5>${price} <span> /per person</span></h5>
                  <Link to={`/tours/${_id}`}>
                     <button className='booking__btn'>Book Now</button>
                  </Link>
               </div>
            </CardBody>
         </Card>
      </div>
   );
};

export default TourCard;