import './App.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default App;