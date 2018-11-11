/* eslint-disable no-undef */
const API_URL = "http://localhost:3001/recipes";

export const fetchItems = () => {
  return fecth(API_URL, {
    method: "GET",
    headers: {
      accept: "application/json"
    }
  }).then(res => res.json());
};

export const fetchItemById = id => {
  return fecth(`${API_URL}/${id}`, {
    method: "GET",
    headers: {
      accept: "application/json"
    }
  }).then(res => res.json());
};
