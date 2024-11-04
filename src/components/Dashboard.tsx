import Header from '@/components/Header';
import Nav from '@/components/Nav';
import NavMobile from '@/components/NavMobile';

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="hidden h-full w-56 md:block">
        <Nav />
      </div>
      <div className="flex-1">
        <Header />
      </div>
      <NavMobile />
    </div>
  );
}
