import Header from '@/components/header/Header';
import Nav from '@/components/nav/Nav';
import NavMobile from '@/components/nav/NavMobile';

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="hidden h-full w-56 md:block">
        <Nav />
      </div>
      <div className="flex-1">
        <div className="container mx-auto flex flex-col gap-4 p-4 md:gap-6 md:p-6">
          <Header />
        </div>
      </div>
      <NavMobile />
    </div>
  );
}
