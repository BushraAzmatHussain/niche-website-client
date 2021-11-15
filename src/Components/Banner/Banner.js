import React from "react";

const Banner = () => {
  return (
    <div
      className="img-fluid d-flex  align-items-center justify-content-center"
      style={{
        height: "80vh",
        backgroundAttachment: " fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg")`,
      }}
    >
      <div>
        <h1
          className="text-light text-center text-capitalize my-4 px-2"
          style={{ fontSize: "3rem" }}
        >
        world class cars
        </h1>
        <h5
          className="  px-2  text-light  text-center"
          style={{ color: "gray" }}
        >
          Welcome to  car world, the ultimate collection of world class cars!
        </h5>
      </div>
    </div>
  );
};

export default Banner;
