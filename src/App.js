import { Outlet } from 'react-router-dom';
import Admin from './admin/Admin';
import './App.css';
import BasketSidebar from './components/sidebar/basket/BasketSidebar';
import Footer from './layout/Footer/Footer';
import Navbar from './layout/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Admin/> */}
      <BasketSidebar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
