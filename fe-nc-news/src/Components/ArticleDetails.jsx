import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../utils/APIclient";
import { ArticleDetailsCard } from "./ArticleDetailsCard";

export const ArticleDetails = () => {
  const { article_id } = useParams();
  const [articleDetails, setArticleDetails] = useState({});

  useEffect(() => {
    apiClient.get(`/articles/${article_id}`).then((response) => {
      setArticleDetails(response.data.article);
    });
  }, []);

  return (
    <>
      <ArticleDetailsCard articleDetails={articleDetails} />
    </>
  );
};
