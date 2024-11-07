import { Comments } from "./Comments";
import { Votes } from "./Votes";
export const ArticleDetailsCard = ({ articleDetails, comments }) => {
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
        <Comments
          comments={comments}
          comment_count={articleDetails.comment_count}
        />
        <Votes articleVotes={articleDetails.votes} />
        <p>{articleDetails.topic}</p>
      </div>
    </div>
  );
};
