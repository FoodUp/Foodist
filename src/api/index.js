const API_URL = process.env.REACT_APP_API_URL;

export const fetchItems = () => {
  return fetch(API_URL, {
    method: "GET",
    headers: {
      accept: "application/json"
    }
  })
    .then(res => res.json())
    .catch(err => err);
};

export const fetchItemById = id => {
  return fetch(`${API_URL}/${id}`, {
    method: "GET",
    headers: {
      accept: "application/json"
    }
  }).then(res => res.json());
};

export const searchItem = term => {
  return fetch(`${API_URL}/search?term=${term}`, {
    method: "GET",
    headers: {
      accept: "application/json"
    }
  }).then(res => res.json());
};
