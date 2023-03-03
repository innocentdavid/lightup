import Header from '@/components/header'
import Hero from '@/components/hero'
import Logos from '@/components/logos';
import EasyPhotoEditing from '@/components/easyPhotoEditing';
import PricingPlan from '@/components/pricingPlan';
import GetStarted from '@/components/getStarted';
import Footer from '@/components/footer';

export default function Home() {

  return (
    <div className="font-[Hind,sans-serif]">
      <Header />
      <Hero />
      <Logos />
      <EasyPhotoEditing />
      <PricingPlan />
      <GetStarted />
      <Footer />
    </div>
  );
}
