import Header from '@/components/header/Header';
import HeathSummary from '@/components/HeathSummary';
import Nav from '@/components/nav/Nav';
import NavMobile from '@/components/nav/NavMobile';
import Trending from '@/components/trending/Trending';

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="hidden h-full w-56 md:block">
        <Nav />
      </div>
      <div className="h-full flex-1 overflow-auto">
        <div className="container mx-auto flex flex-col gap-4 p-4 md:gap-6 md:p-6">
          <Header />
          <HeathSummary />
          <Trending />
        </div>
      </div>
      <NavMobile />
    </div>
  );
}
