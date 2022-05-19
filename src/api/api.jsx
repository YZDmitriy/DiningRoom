import { API_URL } from '../config/config';

const getMealById = async (mealId) => {
  const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
  const meal = await response.json();
  return meal;
};

const getAllCategories = async () => {
  const res = await fetch(API_URL + 'categories.php');
  return  await res.json();
}

const getFilerCategories = async (catName) => {
  const response = await fetch(API_URL + 'filter.php?c=' + catName);
  return  await response.json();
}

export {getMealById, getAllCategories, getFilerCategories}
