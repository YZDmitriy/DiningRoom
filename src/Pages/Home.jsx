import React from 'react';
import { useState, useEffect } from 'react';
import { getAllCategories } from '../api/api';
import CategoryList from '../components/CategoryList/CategoryList';
import Preolader from '../components/Preloader/Preloader';
import Search from '../components/Search/Search';

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filtredCatalog, setFiltredCatalog] = useState([]);

 
  const handleSearch = (str) => {
    setFiltredCatalog(
      catalog.filter(item => 
        item.strCategory.toLowerCase().includes(str.toLowerCase()))
    )
  }

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFiltredCatalog(data.categories)
    });
  }, []);

  return (
    <>
      <Search cb={handleSearch}/>
      {!catalog.length ? <Preolader /> : <CategoryList catalog={filtredCatalog} />}
    </>
  );
}

export default Home;
