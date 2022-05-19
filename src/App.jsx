import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Category from './Pages/Category';


function App() {
  return (
    <>
      <Header/>
      <main className='container content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='/category/:name' element={<Category/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </main>
     <Footer/>
    </>
  );
}

export default App;
