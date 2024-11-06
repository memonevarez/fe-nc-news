import { ArticleDetails } from "./ArticleDetails";
import { Articles } from "./Articles";
import { Route, Routes } from "react-router";
import { Comments } from "./Comments";

export const RoutesContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleDetails />} />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
      </Routes>
    </>
  );
};
