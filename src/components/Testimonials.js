import React from 'react';
import "../components/styles/Testimonials.css";
import Client1 from "../components/assets/Group 65.png";
import Client2 from "../components/assets/Group 66.png";
import Client3 from "../components/assets/Group 67.png";
import Client4 from "../components/assets/Group 68.png";

const Testimonial = ({ rating, image, name, review }) => (
  <div className="testimonial-container">
    <div className="clients_testimonials-box">
      <p>{rating}</p>
      <img src={image} alt="clientimage" />
      <p>{name}</p>
      <p>{review}</p>
    </div>
  </div>
);


const Testimonials = () => {
  const reviews = [
    {
      rating: "4.9",
      image: Client1,
      name: "Amanda Shaw",
      review: "Lorem ipsum, lorem ipsum lorem ipsum "
    },
    {
      rating: "5.0",
      image: Client2,
      name: "Javier Peña",
      review: "Lorem ipsum, lorem ipsum lorem ipsum"
    },
    {
      rating: "4.8",
      image: Client3,
      name: "Olaf Fergusson",
      review: "Lorem ipsum, lorem ipsum lorem ipsum"
    },
    {
      rating: "5.0",
      image: Client4,
      name: "Anne Frank",
      review: "Lorem ipsum, lorem ipsum lorem ipsum"
    },
  ];

  return (
    <section className="testimonial-section-background">
      <div className="section-up">
        <h2>Testimonials</h2>
      </div>      
        <div className="testimonials">
          {reviews.map((review, index) => (
            <Testimonial
              key={index}
              rating={review.rating}
              image={review.image}
              name={review.name}
              review={review.review}
            />
          ))}
        </div>      
    </section>
  );
};

export default Testimonials;
