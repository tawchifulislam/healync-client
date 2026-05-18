import DailyHealthTips from '@/components/DailyHealthTips';
import Banner from '../components/Banner';
import Companions from '@/components/Companions';
import TopRatedDoctors from '@/components/TopRatedDoctors';
export default function Home() {
  return (
    <main>
      <Banner />
      <TopRatedDoctors />
      <Companions />
      <DailyHealthTips />
    </main>
  );
}
