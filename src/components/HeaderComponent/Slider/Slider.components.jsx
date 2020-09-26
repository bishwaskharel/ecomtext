import React from "react";
import { Carousel } from "antd";

import "./Slider.styles.scss";

const Sliders = () => {
  const contentStyle = {
    height: "auto",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <img
            src="https://www.gyapu.com/public/1920-600/files/8B26789FC6BAE47-Dahsain%20Pre%20Booking-01%20(1).png"
            alt="img1"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            src="https://www.gyapu.com/public/1920-600/files/29E8E7BDBFC9104-Frame%203.png"
            alt="img2"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          {" "}
          <img
            src="https://www.gyapu.com/public/1920-600/files/0F5E0434DC640F9-Cooked%20food.png"
            alt="img3"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            src="https://www.gyapu.com/public/1920-600/files/E9D66B670016C19-all%20in%202.png"
            alt="img4"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            src="https://www.gyapu.com/public/1920-600/files/C8BD5FC75D145BD-BAJEKO%20SABAI%20(1).png"
            alt="img4"
          />
        </h3>
      </div>
    </Carousel>
  );
};

export default Sliders;
