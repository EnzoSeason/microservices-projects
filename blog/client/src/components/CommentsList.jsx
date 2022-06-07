import React, { useState, useEffect } from "react";
import axios from "axios";

export function CommentsList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );

      setComments(response.data);
    };
    fetchComments();
  }, [postId]);

  return (
    <div style={{ margin: "1rem" }}>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, idx) => (
          <li key={idx}>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
