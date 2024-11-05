import { useEffect, useState } from "react";
import { apiClient } from "../utils/APIclient";
import { ArticleCard } from "./ArticleCard";

apiClient;
export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/articles")
      .then((response) => {
        setError(false);
        setArticles(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  //console.log(articles, "<<<<ggrrr");
  return (
    <>
      <h2>Articles Feed wow</h2>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </>
  );
};
