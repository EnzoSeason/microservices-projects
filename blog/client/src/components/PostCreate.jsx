import React, { useState } from "react";
import axios from "axios";

export function PostCreate() {
  const [title, setTitle] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:4000/posts", { title });

    console.log(response.data);
    setTitle("");
  };

  return (
    <>
      <h1>Create Post</h1>
      <form onSubmit={onSubmit}>
        <div style={{ margin: "1rem" }}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </>
  );
}
