const ArticleCard = ({ article }) => {
  return (
    <section key={article.article_id} className="article-card">
      <img className="articles-images" src={article.article_img_url} alt="" />
      <div className="articles-text">
      <h4>{article.title}</h4>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
      </div>
    </section>
  );
};

export default ArticleCard;
