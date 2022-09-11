//opções para fazer a requisição para pegar todos os personagens.
import { AxiosRequestConfig } from "axios";
export function FetchAllPersonsOptions(URL: string) {
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
