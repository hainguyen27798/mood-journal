import Header from '@/components/Header';
import Nav from '@/components/Nav';

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Nav />
      <div className="flex-1">
        <Header />
      </div>
    </div>
  );
}
