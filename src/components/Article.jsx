import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle } from "../api";

const Article = () => {
  const { article_id } = useParams();
  console.log(article_id)
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticle(article_id).then((article) => {
        setArticle(article.data)
    })
  }, [article_id])

  return (
    <section>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} />
        <h4>{article.author} | Published: {article.created_at}</h4>
        <p>{article.body}</p>
        <h3>comments...</h3>
    </section>
  )
};

export default Article;
