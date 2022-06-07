import React, { useState } from "react";
import axios from "axios";

export function CommentCreate({ postId }) {
  const [content, setContent] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      `http://localhost:4001/posts/${postId}/comments`,
      { content }
    );

    console.log(response.data);
    setContent("");
  };
  return (
    <>
      <h3>Create Comment</h3>
      <form onSubmit={onSubmit}>
        <div style={{ margin: "1rem" }}>
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            id="comment"
            placeholder="Enter comment"
            title={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
