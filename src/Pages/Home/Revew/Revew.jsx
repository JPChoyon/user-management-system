import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import RevewCard from "./RevewCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Revew = () => {
  const [corosoulData, setCorousolData] = useState();
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setCorousolData(data));
  }, []);
  return (
    <div>
      <div className="py-12">
        <h2 className="text-4xl text-center font-bold uppercase">
          {" "}
          - - - Testimonials - - -{" "}
        </h2>
      </div>
      <div data-aos="zoom-in" data-aos-duration="3000">
        <Carousel>
          {corosoulData?.map((corosul) => (
            <RevewCard key={corosul.id} corosul={corosul}></RevewCard>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Revew;
