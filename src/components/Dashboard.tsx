import Header from '@/components/header/Header';
import Nav from '@/components/Nav';
import NavMobile from '@/components/NavMobile';

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="hidden h-full w-56 md:block">
        <Nav />
      </div>
      <div className="flex-1 p-4 md:p-6">
        <Header />
      </div>
      <NavMobile />
    </div>
  );
}
