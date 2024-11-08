import { ArticleDetails } from "./ArticleDetails";
import { Articles } from "./Articles";
import { Route, Routes } from "react-router";
import { Comments } from "./Comments";
import { SignIn } from "./SignIn";

export const RoutesContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleDetails />} />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
      </Routes>
    </>
  );
};
