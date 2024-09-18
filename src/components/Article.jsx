import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle } from "../api";
import Comments from "./Comments"

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticle(article_id).then((article) => {
        setArticle(article)
    })
  }, [article_id])

  return (
    <section>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} />
        <h4>{article.author} | Published: {article.created_at}</h4>
        <p>{article.body}</p>
        <br />
        <Comments article_id={article_id} /> 
    </section>
  )
};

export default Article;
