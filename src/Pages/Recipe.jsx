import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api/api';
import Preolader from '../components/Preloader/Preloader';

function Recipe() {
  const [recipe, setResipe] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => setResipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preolader />
      ) : (
        <div className='recipe'>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6> Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6> Area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>

          <table className='centered'>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
                </tr>
            </thead>
            <tbody>
              {
                Object.keys(recipe).map(key => {
                  if(key.includes('Ingredient') && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{
                          recipe[`strMeasure${key.slice(13)}`]
                          }</td>
                      </tr>
                    )
                  }
                  return null;
                })
              }
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className='row'>
              <h5 style={{margin: '2rem 0 '}}>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowfullscreen
              />
            </div>
          ) : null}
        </div>
      )}
        <button className='btn' onClick={() => navigate(-1)}>
        Go Back
      </button>
    </>
  );
}

export default Recipe;
