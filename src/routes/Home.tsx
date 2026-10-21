import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import type PostData from "../types/postData";

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
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
