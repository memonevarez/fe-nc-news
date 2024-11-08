import React, { useState, useEffect, useContext } from "react";
import { apiClient } from "../utils/APIclient";
import { CommentAdder } from "./CommentAdder";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

export const Comments = ({ comment_count }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    apiClient.get(`/articles/${article_id}/comments`).then((response) => {
      setComments(response.data.comments);
    });
  }, []);

  const timeAgo = (date) => {
    const seconds = Math.abs(Math.floor((new Date() - new Date(date)) / 1000));
    const hours = Math.floor(seconds / 3600);
    const days = Math.floor(seconds / 86400);

    if (hours < 24) {
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDeleteComment = (commentId) => {
    apiClient
      .delete(`/comments/${commentId}`)
      .then(() => {
        setComments(
          comments.filter((comment) => comment.comment_id !== commentId)
        );
      })
      .catch((err) => {
        console.error("Error deleting comment:", err);
      });
  };

  return (
    <div>
      <p onClick={openModal} className="comments-button">
        View all {comment_count} comments
      </p>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="close-button">
              &times;
            </button>
            <h2 className="comment-header">Comments</h2>
            <CommentAdder
              comments={comments}
              setComments={setComments}
              article_id={article_id}
            />
            <ul>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <li key={comment.comment_id} className="comment">
                    <p>
                      {"["}
                      {timeAgo(comment.created_at)}
                      {"] "}
                      <strong>{comment.author}: </strong>
                      {comment.body}
                      {comment.author === currentUser.username && (
                        <button
                          onClick={() =>
                            handleDeleteComment(comment.comment_id)
                          }
                          className="delete-button"
                        >
                          🗑️
                        </button>
                      )}
                    </p>
                  </li>
                ))
              ) : (
                <p>No comments available.</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
