import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <section key={article.article_id} className="article-card">
      <img className="articles-images" src={article.article_img_url} alt="" />
      <div className="articles-text">
      <h4>{article.title}</h4>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
      </div>
      <Link to={`/articles/${article.article_id}`}>continue to read article...</Link>
    </section>
  );
};

export default ArticleCard;
