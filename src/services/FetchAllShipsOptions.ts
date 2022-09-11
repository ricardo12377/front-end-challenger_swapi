//opções de requisição para pegar todas as naves
import { AxiosRequestConfig } from "axios";
export function FetchAllShipsOptions(URL: string) {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  return options;
}
