//opções de requisição para pegar apenas uma nave e mostrar todos os detalhes dela.
import { AxiosRequestConfig } from "axios";
export function FetchOneShip(URL: string, param: any) {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: URL + param,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  return options;
}
