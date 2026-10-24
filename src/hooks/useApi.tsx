import api from "../service/api";

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

  return { get, post };
};

export default useApi;
