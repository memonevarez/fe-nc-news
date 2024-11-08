import { useState } from "react";
import { apiClient } from "../utils/APIclient";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export const CommentAdder = ({ article_id, comments, setComments }) => {
  //console.log(article_id); Why is this being printed as it it was inside: handleInputChange
  const { currentUser } = useContext(UserContext);
  const [commentText, setCommentText] = useState("");
  //No Loading because the comments are passed as props
  const [error, setError] = useState(false);

  const handleInputChange = (e) => setCommentText(e.target.value);
  const onAddComment = (commentObject) => {
    apiClient
      .post(`/articles/${article_id}/comments`, commentObject)
      .then((response) => {
        const newComment = response.data.comment;
        setComments([newComment, ...comments]);
        setError(false);
      })
      .catch((err) => {
        console.log(err, "<<Error updating data");
        setError(true);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      const commentObject = {
        username: currentUser.username,
        body: commentText,
      };
      onAddComment(commentObject);
      setCommentText(""); // Clear the input after submission
    }
  };

  return (
    <>
      <div className="comment-adder">
        <img
          src={currentUser.avatar_url}
          alt="User avatar"
          className="user-avatar"
        />
        <form onSubmit={handleSubmit} className="comment-form">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={handleInputChange}
            className="comment-input"
          />
          <button type="submit" className="publish-button">
            Publish
          </button>
        </form>
      </div>
      {error && <strong>Error posting comment, please ty again later</strong>}
    </>
  );
};
