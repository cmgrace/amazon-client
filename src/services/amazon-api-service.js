import config from "../config";

const AamzonApiService = {
  getProducts() {
    return fetch(`${config.API_ENDPOINT}/products`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postProductToBasket(item) {
    return fetch(`${config.API_ENDPOINT}/cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getProductsInBasket() {
    return fetch(`${config.API_ENDPOINT}/cart/items`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  deleteItemInBasket(item_id) {
    return fetch(`${config.API_ENDPOINT}/cart/items/${item_id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(credentials),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postOrder(newOrder) {
    return fetch(`${config.API_ENDPOINT}/order/history`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newOrder),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default AamzonApiService;
