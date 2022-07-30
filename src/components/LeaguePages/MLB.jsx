import React from "react";
import BetCardGrid from "../BetCardGrid";
import Navbar from "../Navbar";

const MLBPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <img
        src="https://a.espncdn.com/photo/2022/0603/r1020894_1296x518_5-2.jpg"
        className="HeroImg"
      />
      <BetCardGrid></BetCardGrid>
    </div>
  );
};

export default MLBPage;
