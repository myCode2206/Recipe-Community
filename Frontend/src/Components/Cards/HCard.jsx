import React from "react";
import MyCard from "./MyCard";

const HCard = () => {
  return (
    <div className="container d-flex justify-content-center flex-wrap mt-5 mb-5">
      <MyCard image="https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=600&quality=80" />
      <MyCard image="https://i0.wp.com/picjumbo.com/wp-content/uploads/cooked-jasmine-rice-with-black-sesame-and-chopsticks.jpg?w=1500&quality=50" />
      <MyCard image="https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?resize=350%2C200&ssl=1" />
      <MyCard image="https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap.jpg?w=1500&quality=50" />
      <MyCard image="https://i0.wp.com/picjumbo.com/wp-content/uploads/homemade-dessert-tiramisu-served-in-individual-glasses.jpg?w=600&quality=80" />
      <MyCard image="https://content.jdmagicbox.com/comp/noida/v8/011pxx11.xx11.190925042619.e8v8/catalogue/punjabi-chole-bhature-noida-sector-34-noida-north-indian-restaurants-2whbntunqe.jpg" />
    </div>
  );
};

export default HCard;
