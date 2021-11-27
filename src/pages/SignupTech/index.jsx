import LayoutContainer from "../../components/LayoutContainer";
import Header from "../../components/Header";
import { Form } from "../../style/form";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import api from "../../services/api";

import * as yup from "yup";
import { FiX } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Title } from "./style";
import { useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";

const SignupTech = ({ tech, setTech }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Selecione um status"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [token] = useState(localStorage.getItem("@KenzieHub:token") || "");

  const history = useHistory();

  const onSubmitFunction = (data) => {
    console.log(data);
    api
      .post(
        "/users/techs",
        {
          title: data.title,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setTech(response.data);
        toast.success("Tecnologia cadastrada com sucesso");
        history.push("/dashboard");
      })
      .catch((err) => toast.error("Erro ao cadastrar"));
  };

  const goBack = (path) => {
    history.push(path);
  };

  return (
    <LayoutContainer>
      <Header />
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <Title>
          <h4>Cadastrar Tecnologia</h4>
          <FiX onClick={() => goBack("/dashboard")} />
        </Title>

        <Input
          label="Tecnologia"
          placeholder="Nome da Tech"
          register={register}
          name="title"
          error={errors.title?.message}
        />
        <Select
          label="Selecionar status"
          placeholder="Selecione uma opção"
          register={register}
          name="status"
          error={errors.status?.message}
        >
          {["", "Iniciante", "Intermediário", "Avançado"].map((value) => (
            <option key={value}>{value}</option>
          ))}
        </Select>
        <Button type="submit" text="Cadastrar" />
      </Form>
    </LayoutContainer>
  );
};

export default SignupTech;
