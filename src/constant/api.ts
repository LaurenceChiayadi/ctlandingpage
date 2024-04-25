let BASE_API = "";

let environment = 2;

if (environment === 1) {
  BASE_API = "http://127.0.0.1:8000/api";
} else if (environment === 2) {
  BASE_API = "http://20.198.199.86/api";
}

export default BASE_API;
