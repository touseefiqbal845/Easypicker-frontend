export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3005/carts/", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchItemsByUserId() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3005/carts");
    const data = await response.json();
    console.log("fetchItemsByUserId data", data);

    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3005/carts/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3005/carts/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    console.log("deleteItemFromCart data", data);
    resolve({ data: { id: itemId } });
  });
}

export function resetCart() {
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId();
    const items = response.data.items;
    console.log("items in reset cart API", items);

    if (Array.isArray(items)) {
      for (let item of items) {
        await deleteItemFromCart(item.id);
      }
    } else {
      console.error("Items is not an array:", items);
    }
    resolve({ status: "success" });
  });
}
