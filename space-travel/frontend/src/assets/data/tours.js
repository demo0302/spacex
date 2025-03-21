import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Lunar Expedition",
    city: "Moon Base Alpha",
    distance: 384400, // Distance in km from Earth
    address: "Lunar Orbit",
    price: 250000,
    maxGroupSize: 6,
    desc: "Experience Earthrise and a breathtaking lunar landscape in a 3-day adventure.",
    reviews: [
      {
        name: "Neil Armstrong Jr.",
        rating: 5,
      },
      {
        name: "Buzz Light",
        rating: 4.8,
      },
    ],
    avgRating: 4.9,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Orbital Space Stay",
    city: "International Space Station",
    distance: 420, // ISS orbits 420km above Earth
    address: "Low Earth Orbit",
    price: 150000,
    maxGroupSize: 8,
    desc: "Spend a weekend aboard the ISS, experience zero gravity, and witness 16 sunrises a day!",
    reviews: [
      {
        name: "Elon Skywalker",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Mars Exploration",
    city: "Mars Colony One",
    distance: 225000000, // Average distance from Earth to Mars
    address: "Red Planet Surface",
    price: 750000,
    maxGroupSize: 4,
    desc: "Walk on the surface of Mars, explore Olympus Mons, and witness the red dunes.",
    reviews: [
      {
        name: "Mark Watney",
        rating: 5,
      },
    ],
    avgRating: 4.9,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Spacewalk Adventure",
    city: "Earth's Orbit",
    distance: 400,
    address: "Space Shuttle Endeavour",
    price: 200000,
    maxGroupSize: 2,
    desc: "Step outside a spacecraft and float in space—an experience only astronauts dream of!",
    reviews: [
      {
        name: "Chris Hadfield",
        rating: 5,
      },
    ],
    avgRating: 5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Titan Sub-Surface Dive",
    city: "Saturn's Moon - Titan",
    distance: 1400000000, // Distance in km from Earth to Titan
    address: "Titan’s Methane Lakes",
    price: 1200000,
    maxGroupSize: 3,
    desc: "Dive into Titan’s methane lakes and explore the potential for alien life.",
    reviews: [
      {
        name: "Carl Sagan",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Asteroid Mining Expedition",
    city: "Asteroid Belt",
    distance: 330000000, // Varies depending on location
    address: "Near-Earth Asteroid Base",
    price: 500000,
    maxGroupSize: 6,
    desc: "Join a mining crew to extract rare minerals from asteroids in deep space.",
    reviews: [
      {
        name: "Peter Quill",
        rating: 4.6,
      },
    ],
    avgRating: 4.7,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Voyager Beyond The Solar System",
    city: "Interstellar Space",
    distance: 18900000000, // Voyager 1's current distance from Earth in km
    address: "Edge of the Solar System",
    price: 3000000,
    maxGroupSize: 5,
    desc: "Experience the ultimate adventure—leaving our solar system for the first time.",
    reviews: [
      {
        name: "Dr. Michio Kaku",
        rating: 5,
      },
    ],
    avgRating: 5,
    photo: tourImg07,
    featured: false,
  },
];

export default tours;
