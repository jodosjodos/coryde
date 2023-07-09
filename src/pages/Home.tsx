import HomeMainCard from "../components/HomeMainCard";
import Step1Container from "../components/Home/Step1Container";
import Step2Container from "../components/Home/Step2Container";
import Step3Container from "../components/Home/Step3Container";
import Step4Container from "../components/Home/Step4Container";
import Step5container from "../components/Home/Step5container";


const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <HomeMainCard />
      </div>
      <div>
        <Step1Container/>
      </div>
      <div>
        <Step2Container/>
      </div>
      <div>
        <Step3Container/>
      </div>
      <div>
        <Step4Container/>
      </div>
      <div>
        <Step5container/>
      </div>
    
    </div>
  );
};

export default Home;
