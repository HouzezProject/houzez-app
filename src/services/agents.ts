import { get } from "../utils/axios";

export const requestAgentById = async (id: number) => {
  const url = `/agents/${id}`;
  return get(url).then((response) => response.data);
};
