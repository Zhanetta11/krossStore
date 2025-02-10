import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dummyjson.com/products',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const productsAPI = {
    getAllProducts() {
        return instance.get('/')
    },
    getByName(name) {
        return instance.get(`/search?q=${name}`)
    },
}