import { FiCodesandbox } from "react-icons/fi";
import { Container, Icon, Text } from "./style";

const CardTech = ({ title, status }) => {
  return (
    <Container>
      <Icon>
        <FiCodesandbox />
      </Icon>
      <Text>
        <h4>{title}</h4>
        <p>{status}</p>
      </Text>
    </Container>
  );
};

export default CardTech;
