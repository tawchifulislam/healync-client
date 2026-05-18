import DailyHealthTips from '@/components/DailyHealthTips';
import Banner from '../components/Banner';
import Companions from '@/components/Companions';
export default function Home() {
  return (
    <main>
      <Banner />
      <Companions />
      <DailyHealthTips />
    </main>
  );
}
