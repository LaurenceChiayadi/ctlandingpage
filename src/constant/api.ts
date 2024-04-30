let BASE_API = "";
let STRAPI_BASE = "";

let environment = 2;

if (environment === 1) {
  BASE_API = "http://127.0.0.1:8000/api";
  STRAPI_BASE = "http://localhost:1337";
} else if (environment === 2) {
  BASE_API = "http://20.198.199.86/api";
  STRAPI_BASE = "";
}

export { BASE_API, STRAPI_BASE };
