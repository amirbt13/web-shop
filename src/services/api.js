import axios from 'axios'

export const getProducts = async () => {
    const response = await axios.get("https://api.storerestapi.com/products")
    return response.data
} 