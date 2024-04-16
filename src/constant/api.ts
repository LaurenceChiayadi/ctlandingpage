let BASE_API = "";

const environment = 1;

if (environment === 1) {
  BASE_API = "http://127.0.0.1:8000/api";
} else if (environment === 2) {
  BASE_API = "";
}

export default BASE_API;
