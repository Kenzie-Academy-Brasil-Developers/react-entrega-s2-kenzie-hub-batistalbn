import LayoutContainer from "../../components/LayoutContainer";
import Header from "../../components/Header";
import { Form } from "../../style/form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import api from "../../services/api";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from "react-hot-toast";

const Signup = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    contact: yup.string().required("Contato obrigatório"),
    bio: yup.string(),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Número minímo de 6 caracteres.")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "É necessário uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
      ),
    confirm_password: yup
      .string()
      .required("Senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    console.log(data);

    delete data.confirm_password;

    api
      .post("/users", data)
      .then((response) => {
        toast.success("Cadastro feito com sucesso");
        history.push("/");
      })
      .catch((err) => toast.error("Erro ao cadastraada"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LayoutContainer>
      <Header />
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Nome"
          placeholder="Nome e sobrenome "
          register={register}
          name="name"
          error={errors.name?.message}
        />
        <Input
          label="E-mail"
          placeholder="Insira um email válido"
          type="email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          label="Contato"
          placeholder="Telefone, celular ou LinkedIn"
          register={register}
          name="contact"
          error={errors.contact?.message}
        />
        <Input
          label="Descrição"
          placeholder="Fale um pouco sobre você"
          register={register}
          name="bio"
          error={errors.bio?.message}
        />
        <Select
          label="Selecione um modulo"
          placeholder="Selecione uma opção"
          register={register}
          name="course_module"
          error={errors.course_module?.message}
        >
          {[
            "",
            "Primeiro módulo (Introdução ao Frontend)",
            "Segundo módulo (Frontend avançado)",
            "Terceiro módulo (Introdução ao Backend)",
            "Quarto módulo (Backend avançado)",
          ].map((value) => (
            <option key={value}>{value}</option>
          ))}
        </Select>
        <Input
          label="Senha"
          placeholder="Minímo de 6 caracteres"
          type="password"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <Input
          label="Confirmar senha"
          placeholder="As senhas devem ser indênticas"
          type="password"
          register={register}
          name="confirm_password"
          error={errors.confirm_password?.message}
        />
        <Button type="submit" text="Cadastrar"></Button>
      </Form>
    </LayoutContainer>
  );
};

export default Signup;
