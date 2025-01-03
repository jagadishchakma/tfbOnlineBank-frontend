import BenefitsFeatures from '@/components/home/BenefitsFeatures';
import BusinessBanking from '@/components/home/BusinessBanking';
import Learning from '@/components/home/Learning';
import PresentingProducts from '@/components/home/PresentingProducts';
import SecurityComplaince from '@/components/home/SecurityCompliance';
import Slider from '@/components/home/Slider';
import '@/css/global_css/home.css'
export const metadata = {
  title: "TFB Online Banking",
  description: "TFB online banking is banking platform service for valuable customer.",
};
const Home = () => {
  return (
    <div className="home-main">
      <Slider />
      <PresentingProducts/>
      <BusinessBanking/>
      <Learning/>
      <BenefitsFeatures/>
      <SecurityComplaince/>
    </div>
  );
};

export default Home;
