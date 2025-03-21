import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import userData from '../../assets/data/userData';

const UserDashboard = () => {
   const [countdown, setCountdown] = useState('');

   useEffect(() => {
      if (userData?.nextTripDate) {
         const interval = setInterval(() => {
            const now = new Date().getTime();
            const tripTime = new Date(userData.nextTripDate).getTime();
            const timeLeft = tripTime - now;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

            setCountdown(`${days}d ${hours}h ${minutes}m`);
         }, 1000);

         return () => clearInterval(interval);
      }
   }, []);

   return (
      <Container className="dashboard">
         <Row>
            <Col lg='6'>
               <h2>Welcome, {userData.name}!</h2>
               <h4>Upcoming Trip: {userData.nextTripDestination}</h4>
               <h5>Countdown: {countdown || "No trips scheduled"}</h5>
            </Col>

            <Col lg='6'>
               <h4>Your AI Travel Tips</h4>
               <ul>
                  {userData.travelTips.map((tip, index) => (
                     <li key={index}>{tip}</li>
                  ))}
               </ul>
            </Col>
         </Row>
      </Container>
   );
};

export default UserDashboard;
