import LayoutContainer from "../../components/LayoutContainer";
import Header from "../../components/Header";
import { Form } from "../../style/form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";

const Signup = () => {
  return (
    <LayoutContainer>
      <Header />
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Contato" />
        <Input placeholder="Bio" />
        <Select>
          {[
            "Selecione um módulo",
            "Primeiro",
            "Segundo",
            "Terceiro",
            "Quarto",
          ].map((value) => (
            <option>{value}</option>
          ))}
        </Select>
        <Input placeholder="Senha" type="password" />
        <Input placeholder="Confirmar Senha" type="password" />
        <Button text="Cadastrar"></Button>
      </Form>
    </LayoutContainer>
  );
};

export default Signup;
