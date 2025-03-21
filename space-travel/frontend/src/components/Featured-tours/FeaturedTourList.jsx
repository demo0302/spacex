import React from 'react';
import TourCard from '../../shared/TourCard';
import { Col } from 'reactstrap';
import useFetch from './../../hooks/useFetch';
import { BASE_URL } from './../../utils/config';

const FeaturedTourList = () => {
   const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`);

   return (
      <>
         {loading && <h4>Loading tours...</h4>}
         {error && <h4>Error: {error}</h4>}
         {!loading && !error && featuredTours?.length === 0 && <h4>No featured tours available.</h4>}
         {
            !loading && !error &&
            featuredTours?.map(tour => (
               <Col lg='3' md='4' sm='6' className='mb-4' key={tour?._id}>
                  <TourCard tour={tour} />
               </Col>
            ))
         }
      </>
   );
};

export default FeaturedTourList;
