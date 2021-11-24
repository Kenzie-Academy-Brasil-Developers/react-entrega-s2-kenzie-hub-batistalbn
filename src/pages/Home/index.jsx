import Button from "../../components/Button";
import Input from "../../components/Input";
import { Text } from "./style";
import { Form } from "../../style/form";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import LayoutContainer from "../../components/LayoutContainer";

const Home = () => {
  const history = useHistory();

  const navigation = (path) => {
    history.push(path);
  };

  return (
    <LayoutContainer>
      <Header />
      <Form>
        <Input placeholder="Login" />
        <Input placeholder="Senha" type="password" />
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
