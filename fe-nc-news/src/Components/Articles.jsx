import { useEffect, useState } from "react";
import { apiClient } from "../utils/APIclient";
import { ArticleCard } from "./ArticleCard";

apiClient;
export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const topics = [
    "Cooking",
    "Coding",
    "Football",
    "Music",
    "World",
    "Economy",
    "Technology",
    "Films",
    "Travel",
    "Restaurants",
    "Health",
  ];

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
  return (
    <>
      <h2>Articles Feed wow</h2>
      <div className="topics-scroll-container">
        {topics.map((topic, index) => (
          <span key={index} className="topic-item">
            {topic}
          </span>
        ))}
      </div>
      <div className="article-card-container">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </div>
    </>
  );
};
