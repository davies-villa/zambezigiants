import React from "react";
import DestinationCard from "./DestinationsCard";
import safariImg from "../assets/folosi.png";
import victoriaFallsImg from "../assets/zanzibar.png";
import kilimanjaroImg from "../assets/okavangoo.png";
import zanzibarImg from "../assets/chobe.png";
import capeTownImg from "../assets/capetown.png";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      image: safariImg,
      title: "Safari in Kenya",
      rating: 4.5,
      activities: "Game Drives, Nature Walks",
      price: 1200,
    },
    {
      id: 2,
      image: victoriaFallsImg,
      title: "Victoria Falls",
      rating: 4.8,
      activities: "Waterfalls, Adventure Sports",
      price: 1500,
    },
    {
      id: 3,
      image: kilimanjaroImg,
      title: "Mount Kilimanjaro",
      rating: 4.7,
      activities: "Hiking, Photography",
      price: 1800,
    },
    {
      id: 4,
      image: zanzibarImg,
      title: "Zanzibar Beaches",
      rating: 4.6,
      activities: "Relaxation, Water Sports",
      price: 1300,
    },
    {
      id: 5,
      image: capeTownImg,
      title: "Cape Town Adventures",
      rating: 4.9,
      activities: "City Tours, Wildlife",
      price: 1400,
    },
  ];

  return (
    <section className="py-2 px-2 md:px-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              image={destination.image}
              title={destination.title}
              rating={destination.rating}
              activities={destination.activities}
              price={destination.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
