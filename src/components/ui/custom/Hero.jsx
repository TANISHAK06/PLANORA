import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-10">
      <h1 className="font-extrabold text-[60px] text-center mt-28">
        <span className="text-[#f56551]">Welcome to Planora –</span>
        <br></br> the ultimate travel companion that helps you effortlessly
        plan.
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Planora simplifies travel planning by allowing users to create
        personalized itineraries with ease. Whether you're mapping out a weekend
        getaway or an international adventure, Planora helps you organize
        destinations, activities, and accommodations in one place. With a
        user-friendly interface and customizable options, it ensures your trip
        is perfectly planned from start to finish.
      </p>
      <Link to={"/create-trip"}>
        <Button> Map Your Trip Now </Button>
      </Link>
    </div>
  );
}

export default Hero;
