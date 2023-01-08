import HomeMainCard from "../components/HomeMainCard";
import Step1Container from "../components/Home/Step1Container";
import Step2Container from "../components/Home/Step2Container";
import Step3Container from "../components/Home/Step3Container";
import Step4Container from "../components/Home/Step4Container";
import Step5container from "../components/Home/Step5container";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Home = () => {
  const formSubmitted = useSelector(
    (state: RootState) => state.formSubmission.submitted
  );
  if (formSubmitted) {
    window.scroll(0, 750);
  }

  return (
    <div className="flex flex-col gap-10  dark:bg-[#030D27] ">
      <div id="homeCard">
        <HomeMainCard />
      </div>
      <div>
        <Step1Container />
      </div>
      <div>
        <Step2Container />
      </div>
      <div>
        <Step3Container />
      </div>
      <div>
        <Step4Container />
      </div>
      <div>
        <Step5container />
      </div>
    </div>
  );
};

export default Home;
