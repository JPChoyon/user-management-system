import Banner from "./Banner/Banner";
import Download from "./Download/Download";
import Revew from "./Revew/Revew";
import Services from "./Services/Services";
import Timeline from "./Timline/Timeline";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Revew></Revew>
      <Timeline></Timeline>
      <Download></Download>
    </div>
  );
};

export default Home;