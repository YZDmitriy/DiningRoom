import React from 'react';
import { useState, useEffect } from 'react';
import {getAllCategories} from '../api/api'
import CategoryList from '../components/CategoryList/CategoryList';
import Preolader from '../components/Preloader/Preloader';

function Home() {

  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    getAllCategories().then(data => {
      setCatalog(data.categories)
    } )
  }, [])

  return (
    <>
      {
        !catalog.length ? <Preolader/> : (
          <CategoryList catalog={catalog}/>
        )
      }
    </>
  );
}

export default Home;