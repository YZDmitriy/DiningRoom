import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilerCategories } from '../api/api';
import MealList from '../components/MealList/MealList';
import Preolader from '../components/Preloader/Preloader';



function Category(props) {

  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilerCategories(name).then((data) => setMeals(data.meals));
  }, [name])

  return <>
  {!meals.length ? <Preolader/> : <MealList meals={meals}/>}
  </>;
}

export default Category;
