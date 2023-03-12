import React, { useState } from "react";
import Slider from "react-slick";
import {
  bannerImgFive,
  bannerImgFour,
  bannerImgOne,
  bannerImgThree,
  bannerImgTwo,
} from "../../assets/index";
const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "0",
          right: "0",
          margin: "0 auto",
          transform: "tranlate(-50% -50%)",
          width: "210px",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: "1px solid #f3a847",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#131921",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: "1px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#232F3E",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "70",
                left: "0",
                right: "0",
                margin: "0 auto",
                transform: "tranlate(-50% -50%)",
                width: "150px",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="w-full h-full relative">
        <Slider {...settings}>
          <div>
            <img className="" src={bannerImgOne} alt="bannerImgOne" />
          </div>
          <div>
            <img className="" src={bannerImgTwo} alt="bannerImgTwo" />
          </div>
          <div>
            <img className="" src={bannerImgThree} alt="bannerImgThree" />
          </div>
          <div>
            <img className="" src={bannerImgFour} alt="bannerImgFour" />
          </div>
          <div>
            <img className="" src={bannerImgFive} alt="bannerImgFive" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
