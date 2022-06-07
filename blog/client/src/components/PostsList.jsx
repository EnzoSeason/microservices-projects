import React, { useState, useEffect } from "react";
import axios from "axios";
import { CommentCreate } from "./CommentCreate";

export function PostsList() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:4000/posts");

      setPosts(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      <div style={{ margin: "1rem" }}>
        {Object.keys(posts).map((key) => (
          <div key={key}>
            <h2>{posts[key].title}</h2>
            <CommentCreate postId={key} />
          </div>
        ))}
      </div>
    </div>
  );
}
