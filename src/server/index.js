import axios from "axios";

export let api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
