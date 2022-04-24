import axios from "axios";

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines'
})
const apiKey = '&apiKey=004072642ddf4ba2808f47e76bde5ad7'

export const newsAPI = {
    getNews() {
        return instance.get<TNewsData>('?country=ru' + apiKey).then(response => response.data)
    }
}


export type TNewsData = {
    status: string
    totalResults: number
    articles: TArticle[]
}

export type TArticle = {
    source: {
        id: string | null,
        name: string | null
    },
    author: string | null,
    title: string | null,
    description: string | null,
    url: string | null,
    urlToImage: string | null,
    publishedAt: string | null,
    content: string | null
}