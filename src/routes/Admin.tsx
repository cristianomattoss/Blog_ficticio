import { useState, useEffect } from "react";
import useApi from "../hooks/useApi";
import type { PostData } from "../types/postData";
import { Link } from "react-router-dom";

import "./Admin.css";

const Admin = () => {
  const { get, deletePost } = useApi();

  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await get("/posts");
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  const removePost = async (id: number) => {
    await deletePost(`posts/${id}`);

    const filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts);
  };

  return (
    <div className="admin">
      <h1>Gerenciar Posts</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <div className="actions">
            <Link to={`/posts/edit/${post.id}`} className="btn edit-btn">
              Editar
            </Link>
            <button
              className="btn delete-btn"
              onClick={() => removePost(post.id)}
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Admin;
