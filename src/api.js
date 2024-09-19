import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://be-nc-news-project-j8hl.onrender.com/api",
});

export const getArticles = () => {
  return ncNewsApi.get("/articles").then((articles) => {
    return articles.data;
  });
};

export const getArticle = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((requestedArticle) => {
    return requestedArticle.data;
  });
};

export const getArticleComments = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}/comments`)
    .then((requestedComments) => {
      return requestedComments.data;
    });
};

export const patchVote = (article_id, vote) => {
  const voteUpdate = { inc_votes: vote };
  return ncNewsApi.patch(`/articles/${article_id}`, voteUpdate);
};

export const postComment = (article_id, newComment) => {
  return ncNewsApi.post(`/articles/${article_id}/comments`, newComment);
};
