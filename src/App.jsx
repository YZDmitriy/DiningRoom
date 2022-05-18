import { Header } from './Header/Header';
import Footer from './Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <main className='container content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
