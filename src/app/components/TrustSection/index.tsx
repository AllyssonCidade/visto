import React from "react";
import Description from "./Description";
import TextSide from "./TextSide";

export default function TrustSection() {
  return (
    <section className="bg-white md:px-2 lg:px-14 py-20 flex flex-col md:gap-4 lg:gap-10">
      <div className="flex flex-col justify-between ">
        <Description />
        <TextSide />
      </div>
    </section>
  );
}
