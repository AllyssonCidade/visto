import React from "react";
import TopDesign from "./TopDesign";
import LeftDesign from "./LeftDesign";
import RightDesign from "./RightDesign";
import ImagesDesign from "./ImagesDesign";
import CallToDestines from "./CallToDestines";

export default function PopularDestinations() {
  return (
    <section className="bg-white flex flex-col md:pb-8 lg:pb-20 text-center">
      <TopDesign />
      <div className="bg-white flex flex-row  text-center">
        <LeftDesign />
        <div className="flex flex-col w-full">
          <CallToDestines />
          <ImagesDesign />
        </div>
        <RightDesign />
      </div>
    </section>
  );
}
