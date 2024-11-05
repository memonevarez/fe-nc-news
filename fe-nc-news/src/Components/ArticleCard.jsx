import { Link } from "react-router-dom";
export const ArticleCard = ({ article }) => {
  return (
    <Link className="item-link" to={`/articles/${article.article_id}`}>
      <div className="card">
        <div className="card-content">
          <div className="card-image-container">
            <img className="card-image" src={article.article_img_url} />
          </div>
          <div className="card-info">
            <p className="card-title">{article.title}</p>
            <p className="card-author">By {article.author}</p>
          </div>
        </div>
        <div className="card-footer">
          <p>Comments: {article.comment_count} </p>
          <p>Votes: {article.votes}</p>
          <p>{article.topic}</p>
        </div>
      </div>
    </Link>
  );
};
