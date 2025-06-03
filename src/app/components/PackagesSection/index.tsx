import React from "react";
import Header from "./Header";
import Cards from "./Cards";

export default function PackagesSection() {
  return (
    <section className="bg-white sm:px-2 px-4 md:px-8 lg:px-16 md:pb-8 lg:pb-32 md:py-8 lg:py-20">
      <Header />

      <Cards />
    </section>
  );
}
