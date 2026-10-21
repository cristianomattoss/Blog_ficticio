import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import type PostData from "../type/postData";

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
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
