import "./NewPost.css";

import { useState, type SubmitEvent } from "react";
import useApi from "../hooks/useApi";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();

  const { post } = useApi();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPost = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postData = { title, content, userId: 1 };
    await post("/posts", postData);
    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o título"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="content">Conteúdo:</label>
          <textarea
            name="content"
            id="content"
            placeholder="Digite o conteúdo"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn-create" />
      </form>
    </div>
  );
};

export default NewPost;
