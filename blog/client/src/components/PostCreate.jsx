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
        <div>
          <label htmlFor="title" style={{ margin: "1rem" }}>
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit" style={{ margin: "1rem" }}>
          Create Post
        </button>
      </form>
    </>
  );
}
