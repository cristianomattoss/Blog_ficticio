import useApi from "../hooks/useApi";

import type { PostData } from "../types/postData";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Post.css";

const Post = () => {
  const { id } = useParams();
  const { getPost } = useApi();
  const [post, setPost] = useState<PostData>();

  useEffect(() => {
    const fetchPost = async () => {
      const postData: PostData = await getPost(`posts/${id}`);
      setPost(postData);
    };
    fetchPost();
  }, []);

  return (
    <div className="post-container">
      {!post ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{post!.title}</h2>
          <p>{post!.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
