import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";

import type { PostData } from "../types/postData";

import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const { get } = useApi();

  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await get("/posts");
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <div className="home">
      <h1>Últimos Posts</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`} className="btn-more">
            Ler mais
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
