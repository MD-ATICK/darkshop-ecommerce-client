import axios from "axios";

// const api = axios.create({ baseURL: 'https://darkshop-ecommerce-server.vercel.app/api' })
const api = axios.create({ baseURL: 'http://localhost:4000/api' })

export default api;