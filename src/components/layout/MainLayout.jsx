import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const MainLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="page-container bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;