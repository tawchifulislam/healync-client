import DailyHealthTips from '@/components/DailyHealthTips';
import Banner from '@/components/Banner';
import Companions from '@/components/Companions';
import TopRatedDoctors from '@/components/TopRatedDoctors';
import Statistics from '@/components/Statistics';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  return (
    <main>
      <Banner />
      <TopRatedDoctors />
      <Statistics />
      <HowItWorks />
      <Companions />
      <DailyHealthTips />
    </main>
  );
}
