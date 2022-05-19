import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import NotFound from './components/Pages/NotFound';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <main className='container content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </main>
     <Footer/>
    </>
  );
}

export default App;
