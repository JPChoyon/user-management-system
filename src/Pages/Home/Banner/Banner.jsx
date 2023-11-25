import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import slider1 from "../../../assets/slide 1.jpg";
import slider2 from "../../../assets/slide 2.jpg";
import slider3 from "../../../assets/slide 3.jpg";
import slider4 from "../../../assets/slide 4.jpg";
import slider5 from "../../../assets/slide 5.jpg";
import slider6 from "../../../assets/slide 6.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const slider = (
  <AutoplaySlider
    play={true}
    // cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
    className="h-[calc(100vh-80px)]"
  >
    <div data-src={slider1} />
    <div data-src={slider2} />
    <div data-src={slider3} />
    <div data-src={slider4} />
    <div data-src={slider5} />
    <div data-src={slider6} />
  </AutoplaySlider>
);

const Banner = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="3000" className="z-0 ">
      {slider}
    </div>
  );
};

export default Banner;
