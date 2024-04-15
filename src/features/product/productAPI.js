const mongoose = require('mongoose');


export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:3005/all-products/"+ id);
    const data = await responce.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {      
    const response = await fetch("http://localhost:3005/all-products/", {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'content-type': 'application/json' }
    });

    const data = await response.json();
    resolve({ data });
  });
}



export function updateProduct(product) {
  console.log("Products", product);

  return new Promise(async (resolve) => {
    // const productId = mongoose.Types.ObjectId(product.id);
    const responce = await fetch(`/all-products/${product.id}`, {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: { 'content-type': 'application/json' }
    });

    const data = await responce.json();
    console.log("Products from updateProduct:", data);

    resolve({ data });
  });
}


export function fetchAllProducts() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:3005/all-products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      console.log("Products from fetchAllProducts:", data);
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}


export function fetchProductsByFilters(filter, sort, pagination, admin) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}
  console.log("fetchProductsByFilters parameters",sort,filter,admin,pagination);

  let queryString = '';
  for (let key in filter) {
    const categoryValues = [...new Set(filter[key])]; 
  
    if (categoryValues.length) {
      queryString += `${key}=${categoryValues}&`;

    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  if(admin){
    queryString += `admin=true`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:3005/all-products?" + queryString);
    const data = await response.json();
   console.log("data product api",data)
   const totalItems = await response.headers.get('X-Total-Count');


   // Convert the 'data' property to an array
   const dataArray = Array.from(data.data);
   console.log("dataArray",dataArray)

    // resolve({ data: dataArray, totalItems: +totalItems   });

    // resolve({ data: dataArray, total: totalItems });
    // console.log("hh",{ data: dataArray, total: totalItems })
    resolve({ data: { products: dataArray, totalItems: +totalItems } });
    // console.log("hh",{ data: { products: dataArray, totalItems: +totalItems } })
    console.log("filter Data ",({ data: { products: dataArray, totalItems: +totalItems } }))

  });
}


export function fetchCategories() {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:3005/categories");
    const data = await responce.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:3005/brands");
    const data = await responce.json();
    resolve({ data });
  });
}

