import { ArticleDetails } from "./ArticleDetails";
import { Articles } from "./Articles";
import { Route, Routes } from "react-router";

export const RoutesContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleDetails />} />
      </Routes>
    </>
  );
};
