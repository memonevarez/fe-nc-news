import { Link } from "react-router-dom";
export const ArticleDetailsCard = ({ articleDetails }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image-container">
          <img className="card-image" src={articleDetails.article_img_url} />
        </div>
        <div className="card-info">
          <p className="card-title">{articleDetails.title}</p>
          <p className="card-body">{articleDetails.body}</p>
          <p className="card-author">By {articleDetails.author}</p>
        </div>
      </div>
      <div className="card-footer">
        <p>Comments: {articleDetails.comment_count} </p>
        <p>Votes: {articleDetails.votes}</p>
        <p>{articleDetails.topic}</p>
      </div>
    </div>
  );
};
