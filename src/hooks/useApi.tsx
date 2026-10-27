import api from "../service/api";
import type { UpdatePostData } from "../types/postData";

const useApi = () => {
  const get = async (endpoint: string) => {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      alert("Erro ao buscar dados da API");
      throw error;
    }
  };

  const post = async (
    endpoint: string,
    data: { title: string; content: string; userId: number },
  ) => {
    try {
      const response = await api.post(endpoint, data);
      alert("Postagem criada com sucesso!");
      return response.data;
    } catch (error) {
      alert("Erro ao criar postagem");
      throw error;
    }
  };

  const getPost = async (endpoint: string) => {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      alert("Erro ao buscar Post");
    }
  };

  const deletePost = async (endpoint: string) => {
    try {
      const response = await api.delete(endpoint);
      return response;
    } catch {
      alert("Erro ao deletar Post");
    }
  };

  const updatePost = async (endpoint: string, post: UpdatePostData) => {
    const response = await api.put(endpoint, {
      body: post,
    });
    return response;
  };

  return { get, post, getPost, deletePost, updatePost };
};

export default useApi;
