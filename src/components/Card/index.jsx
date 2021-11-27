import Desconhecido from "../../assets/Desconhecido.png";
import { Body, Container, Data, Header, Icon, Info } from "./style";
import Button from "../Button";
import { FiMail, FiSmartphone } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Card = ({ user, setAuthenticated }) => {
  const history = useHistory();

  const goBack = () => {
    setAuthenticated(false);
    history.push("/");
  };

  return (
    <Container>
      <Header>
        <img src={Desconhecido} alt="Avatar" />
        <Data>
          <h2>{user.name}</h2>
          <p>{user.course_module}</p>
        </Data>
      </Header>
      <Body>
        <Info>
          <Icon colorSchema>
            <FiSmartphone />
          </Icon>
          <div>
            <h4>Contato</h4>
            <p>{user.contact}</p>
          </div>
        </Info>
        <Info>
          <Icon>
            <FiMail />
          </Icon>
          <div>
            <h4>Enviar email</h4>
            <p>{user.email}</p>
          </div>
        </Info>
        <Button onClick={goBack} text="Sair" colorSchema />
      </Body>
    </Container>
  );
};

export default Card;
