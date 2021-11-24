import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Form } from "./style";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const navigation = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <h2>
        Kenzie <span>Hub</span>
      </h2>
      <Form>
        <Input placeholder="Login" />
        <Input placeholder="Senha" type="password" />
        <Button text="Logar" />
        <div>
          <p>
            Cria uma Página para mostrar suas
            <span> habilidades metas e progresso.</span>
          </p>
        </div>

        <Button
          onClick={() => navigation("/signup")}
          colorSchema
          text="Cadastrar"
        />
      </Form>
    </Container>
  );
};

export default Home;
