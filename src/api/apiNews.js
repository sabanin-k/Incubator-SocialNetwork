import axios from "axios";

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines'
})

const apiKey = '&apiKey=004072642ddf4ba2808f47e76bde5ad7'

export const newsAPI = {
    getNews() {
        return instance.get('?country=ru' + apiKey).then(response => response.data)
    }
}