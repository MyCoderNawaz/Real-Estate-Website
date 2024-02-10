import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "./Recidencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
const Recidencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="Home" />
                <span className="secondaryText r-price">
                    <span>{card.price}</span>
                    <span style={{color:"orange"}}> Million</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recidencies;


