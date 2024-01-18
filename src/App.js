import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Restview from './pages/Restview';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurent-view/:id' element={<Restview />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
