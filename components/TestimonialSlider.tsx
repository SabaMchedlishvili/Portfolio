import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      additionalTransform={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      itemClass="item"
    >
      <ClientReview
        image="/images/c1.jpg"
        name="Ethan Parker"
        role="web Developer"
        review="Working with WEBDEV has been an incredible experience. The team understood our vision and delivered an amazing website that exceeded our expectations. Highly recommend their services!"
      />
      <ClientReview
        image="/images/c2.jpg"
        name="Lucas Bennett"
        role="MERN stack Developer"
        review="Exceptional service from start to finish. The team went above and beyond to ensure everything was perfect. Our site is both beautiful and functional—highly recommended!"
      />
      <ClientReview
        image="/images/c3.webp"
        name="Noah Sinclair"
        role="React Js Developer"
        review="Couldn’t be happier with the outcome! WEBDEV understood exactly what we needed and created a website that reflects our brand perfectly. Great communication and expertise!"
      />
      <ClientReview
        image="/images/c4.webp"
        name="Julian Hayes"
        role="Next Js Developer"
        review="An amazing experience! The attention to detail and commitment to excellence were clear throughout the project. Our website is fast, modern, and user-friendly. Thank you, WEBDEV!"
      />
    </Carousel>
  );
};

export default TestimonialSlider;
