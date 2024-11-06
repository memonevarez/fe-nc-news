import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { apiClient } from "../utils/APIclient";
import { ArticleDetailsCard } from "./ArticleDetailsCard";
import { Comments } from "./Comments";
Comments;
export const ArticleDetails = () => {
  const { article_id } = useParams();
  const [articleDetails, setArticleDetails] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    apiClient.get(`/articles/${article_id}`).then((response) => {
      setArticleDetails(response.data.article);
    });
  }, []);

  useEffect(() => {
    apiClient.get(`/articles/${article_id}/comments`).then((response) => {
      setComments(response.data.comments);
    });
  }, []);

  return (
    <>
      <ArticleDetailsCard articleDetails={articleDetails} comments={comments} />
    </>
  );
};
