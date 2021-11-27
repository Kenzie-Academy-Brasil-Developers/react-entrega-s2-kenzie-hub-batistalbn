import Button from "../../components/Button";
import Input from "../../components/Input";
import { Text } from "./style";
import { Form } from "../../style/form";
import Header from "../../components/Header";
import LayoutContainer from "../../components/LayoutContainer";
import api from "../../services/api";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from "react-hot-toast";

const Home = ({ authenticated, setAuthenticated, navigation }) => {
  const history = useHistory();

  const formShema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Número minímo de 8 caracteres.")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha inválida"
      ),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formShema),
  });

  const onHandleSubmit = (data) => {
    console.log(data);
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@KenzieHub:token", token);
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        setAuthenticated(true);
        toast.success("Login feito com sucesso.");
        history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha incorretos"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LayoutContainer>
      <Header />
      <Form onSubmit={handleSubmit(onHandleSubmit)}>
        <Input placeholder="Email" register={register} name="email" />
        <Input
          placeholder="Senha"
          type="password"
          register={register}
          name="password"
        />
        <Button text="Logar" />
        <Text>
          <p>
            Cria uma Página para mostrar suas
            <span> habilidades, metas e progresso.</span>
          </p>
        </Text>

        <Button
          onClick={() => navigation("/signup")}
          colorSchema
          text="Cadastrar"
        />
      </Form>
    </LayoutContainer>
  );
};

export default Home;
