import React, { useState } from "react";
//import "./Comments.css"; // Import CSS for styling

export const Comments = ({ comments, comment_count }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            <h2>Comments</h2>
            <ul>
              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <li key={index} className="comment">
                    <p>
                      <strong>{comment.author}:</strong> {comment.body}
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
