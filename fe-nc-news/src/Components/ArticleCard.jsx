export const ArticleCard = ({ article }) => {
  console.log(article);
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image-container">
          <img className="card-image" src={article.article_img_url} />
        </div>
        <div className="card-info">
          <p className="card-author">{article.author}</p>
          <p className="card-title">{article.title}</p>
        </div>
      </div>
      <div className="card-footer">
        <p>Comments: {article.comment_count} </p>
        <p>Votes: {article.votes}</p>
        <p>{article.topic}</p>
      </div>
    </div>
  );
};
