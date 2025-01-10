import './App.css';
import ScreensRoutes from './screens/Routes';
import Footer from './shared/footer/Footer';
import Navbar from './shared/nav/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ScreensRoutes />
      <Footer />
    </>
  );
}

export default App