import React, { useState, useEffect } from "react";
import { PiThumbsUpBold, PiThumbsDownBold } from "react-icons/pi";
import { apiClient } from "../utils/APIclient";
import { useParams } from "react-router-dom";

export const Votes = ({ articleVotes }) => {
  const { article_id } = useParams();
  const [votes, setVotes] = useState(articleVotes);
  const [updatedVote, setUpdatedVote] = useState({ inc_votes: 0 });
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  useEffect(() => {
    apiClient
      .patch(`/articles/${article_id}`, updatedVote)
      .then((response) => {
        setVotes(response.data.updatedArticle.votes);
      })
      .catch((err) => {
        console.log(err, "<<Error updating data");
      });
  }, [updatedVote]);

  /**
   * if (upvoted true and downvoted false) -1
   * if (both were false and upvoted ) +1
   * if (downvoted true and upvotes) +2
   */
  const handleUpvote = () => {
    if (upvoted && !downvoted) {
      setUpdatedVote({ inc_votes: -1 });
      setUpvoted(false);
    } else if (!upvoted && !downvoted) {
      setUpdatedVote({ inc_votes: +1 });
      setUpvoted(true);
    } else if (!upvoted && downvoted) {
      setUpdatedVote({ inc_votes: +2 });
      setUpvoted(true);
      setDownvoted(false);
    }
  };

  const handleDownvote = () => {
    if (downvoted && !upvoted) {
      setUpdatedVote({ inc_votes: +1 });
      setDownvoted(false);
    } else if (!upvoted && !downvoted) {
      setUpdatedVote({ inc_votes: -1 });
      setDownvoted(true);
    } else if (!downvoted && upvoted) {
      setUpdatedVote({ inc_votes: -2 });
      setUpvoted(false);
      setDownvoted(true);
    }
  };

  return (
    <div className="vote-buttons">
      <button
        className={`vote-button ${upvoted ? "active" : ""}`}
        onClick={handleUpvote}
      >
        <PiThumbsUpBold color={upvoted ? "green" : "black"} />
      </button>
      <p className="vote-button">Votes: {votes}</p>
      <button
        className={`vote-button ${downvoted ? "active" : ""}`}
        onClick={handleDownvote}
      >
        <PiThumbsDownBold color={downvoted ? "red" : "black"} />
      </button>
    </div>
  );
};
