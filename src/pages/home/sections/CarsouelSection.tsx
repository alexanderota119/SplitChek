import React from "react";
import { CarsouleArea } from "../../../site-settings/site-style/home/CarsoulSection.style";
import CarsouelCell from "../../../components/CarsouelCell";
import CustomSlider from "components/Slider/";

const data = [
  {
    title: "#Vegan Friendly",
    src: "https://dl.airtable.com/.attachmentThumbnails/5278d75ba880266fccead94ce8c5a7c7/27b0ecd9",
  },
  {
    title: "#Vegetarian",
    src: "https://dl.airtable.com/.attachmentThumbnails/5278d75ba880266fccead94ce8c5a7c7/27b0ecd9",
  },
  {
    title: "#Daire Free",
    src: "https://dl.airtable.com/.attachmentThumbnails/5278d75ba880266fccead94ce8c5a7c7/27b0ecd9",
  },
  {
    title: "#Daire Free",
    src: "https://dl.airtable.com/.attachmentThumbnails/5278d75ba880266fccead94ce8c5a7c7/27b0ecd9",
  },
  {
    title: "#Daire Free",
    src: "https://dl.airtable.com/.attachmentThumbnails/5278d75ba880266fccead94ce8c5a7c7/27b0ecd9",
  },
  {
    title: "#Vegan Friendly",
    src: "https://dl.airtable.com/.attachmentThumbnails/5278d75ba880266fccead94ce8c5a7c7/27b0ecd9",
  },
  {
    title: "#Vegetarian",
    src: "https://dl.airtable.com/.attachmentThumbnails/5278d75ba880266fccead94ce8c5a7c7/27b0ecd9",
  },
  {
    title: "#Daire Free",
    src: "https://dl.airtable.com/.attachmentThumbnails/5278d75ba880266fccead94ce8c5a7c7/27b0ecd9",
  },
  {
    title: "#Daire Free",
    src: "https://dl.airtable.com/.attachmentThumbnails/5278d75ba880266fccead94ce8c5a7c7/27b0ecd9",
  },
];

const settings = {
  dots: false,
  slidesToShow: 8,
  slidesToScroll: 8,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

const CarsouelSection: React.FC = () => {
  return (
    <CarsouleArea>
      <CustomSlider settings={settings}>
        {data.map((item, key) => {
          return (
            <CarsouelCell
              key={key}
              src={item.src}
              title={item.title}
            ></CarsouelCell>
          );
        })}
      </CustomSlider>
    </CarsouleArea>
  );
};

export default CarsouelSection;
