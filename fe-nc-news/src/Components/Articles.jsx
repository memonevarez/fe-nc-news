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
      <p>Current features:</p>
      <ul>
        <li>News feed</li>
        <li>Article details/body</li>
        <li>
          Add comments with option for users to delete their own comments only
        </li>
        <li>Upvote/Downvote functionality</li>
        <li>Netflix-Style user login</li>
      </ul>
      <p>Upcoming features:</p>
      <ul>
        <li>Filtering by topic</li>
        <li>Sorting by date, comment count, and votes</li>
        <li>Pagination</li>
      </ul>

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
