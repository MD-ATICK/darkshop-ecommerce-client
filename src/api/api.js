import axios from "axios";

const api = axios.create({ baseURL: 'https://dashboard-server-render.onrender.com/api' })
// const api = axios.create({ baseURL: 'https://darkshop-ecommerce-sever-side.onrender.com/api' })
// const api = axios.create({ baseURL: 'https://dashboard-server-render.onrender.com/api' })
// const api = axios.create({ baseURL: 'http://localhost:4000/api' })

export default api;