import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle, patchVote } from "../api";
import Comments from "./Comments"

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [votes, setVotes] = useState()

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article)
      setVotes(article.votes)
    })
  }, [article_id])

  const handleVote = ((vote) => {
    setVotes((previousCount) => previousCount + vote)
    patchVote(article_id, vote)
  })
  
  return (
    <section>
        <h2>{article.title}</h2>
        <h3>{votes} votes 
        <button className="vote-button" onClick={() => handleVote(-1)}>-</button>
        <button className="vote-button" onClick={() => handleVote(1)}>+</button></h3>
        <img src={article.article_img_url} />
        <h4>{article.author} | Published: {article.created_at}</h4>
        <p>{article.body}</p>
        <br />
        <Comments article_id={article_id} /> 
    </section>
  )
};

export default Article;
