import { Header } from './Header/Header';
import Footer from './Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <Header />
      <main className='container content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
