import axios from 'axios'

const ncNewsApi = axios.create({baseURL: "https://be-nc-news-project-j8hl.onrender.com/api"})

export const getArticles = () => {
    return ncNewsApi.get("/articles")
    .then((articles) => {
        return articles.data
    })
    .catch((error) => {
        console.log(error)
    })
}