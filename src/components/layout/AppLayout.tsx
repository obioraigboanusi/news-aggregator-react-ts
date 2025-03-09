import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow grid">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
