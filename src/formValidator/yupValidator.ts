//validador do formulário de login
import * as yup from "yup";

export const yupSchema = yup.object().shape({
  user: yup.string().required(),
  password: yup.string().required(),
});
