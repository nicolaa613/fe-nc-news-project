import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((articles) => {
            setArticles(articles)
        })
    }, [])

    return (
        <div className="articles">
            {articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article} />
            })}
        </div>
    )
}

export default Articles