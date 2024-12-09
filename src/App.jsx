import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      {/* Scroll to top on route changes */}
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
    
  );
}


export default App;