import { useState, useEffect, type SubmitEvent } from "react";
import useApi from "../hooks/useApi";
import { useNavigate, useParams } from "react-router-dom";
import type { PostData, UpdatePostData } from "../types/postData";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const { getPost, updatePost } = useApi();

  useEffect(() => {
    const fetchPost = async () => {
      const postData: PostData = await getPost(`posts/${id}`);

      setTitle(postData.title);
      setContent(postData.body);
    };
    fetchPost();
  }, []);

  const editPost = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const post: UpdatePostData = { title, body: content, userId: 1 };
    await updatePost(`posts/${id}`, post);
    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Editando: {title}</h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o título"
            id="title"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="content">Conteúdo:</label>
          <textarea
            name="content"
            id="content"
            placeholder="Digite o conteúdo"
            value={content || ""}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Editar Post" className="btn-create" />
      </form>
    </div>
  );
};

export default EditPost;
