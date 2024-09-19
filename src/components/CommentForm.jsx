import { useState } from "react";
import { postComment } from "../api";
import { useParams } from "react-router-dom";

const addComment = () => {
  const { article_id } = useParams();
  const [commentToPost, setCommentToPost] = useState("");

  const handleComment = (event) => {
    setCommentToPost(event.target.value);
  };

  const handlePosting = (event) => {
    event.preventDefault();

    postComment(article_id, {
      username: "jessjelly",
      body: commentToPost,
    }).then(() => {
      setCommentToPost("");
    });
  };

  return (
    <form onSubmit={handlePosting}>
      <input
        type="text"
        placeholder="Add your own comment..."
        name="comment_to_post"
        onChange={handleComment}
        value={commentToPost}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default addComment;
