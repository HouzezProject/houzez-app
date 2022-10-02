import { get } from "../utils/axios";
import { AxiosResponse, AxiosError } from "axios";

export const requestAgentByEmail = async (email: string) => {
  const url = `/agents?email=${email}`;
  return get(url)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((reason: AxiosError) => {
      return reason.response?.data;
    });
};
