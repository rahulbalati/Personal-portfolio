import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/sam.jpg";
import profilePic2 from "../../img/sundar.jpg";
import profilePic3 from "../../img/bill.jpg";
import profilePic4 from "../../img/mark-zuckerberg.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "No matter what you choose,build stuff be around smart people",
    },
    {
      img: profilePic2,
      review:
        "Wear your failures as a badge of honour",
    },
    {
      img: profilePic3,
      review:
        "Success is a losuy teacher.It seduces smart people into thinking that they can't lose",
    },
    {
      img: profilePic4,
      review:
        "The biggest risk is not taking any risk",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
