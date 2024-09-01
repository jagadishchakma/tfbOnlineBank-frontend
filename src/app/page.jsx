import BusinessBanking from '@/components/home/BusinessBanking';
import Learning from '@/components/home/Learning';
import PresentingProducts from '@/components/home/PresentingProducts';
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
    </div>
  );
};

export default Home;
