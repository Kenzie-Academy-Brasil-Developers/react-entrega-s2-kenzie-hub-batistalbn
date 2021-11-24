import { Container } from "./style";

const Input = ({ placeholder, type }) => {
  return (
    <Container>
      <input placeholder={placeholder} type={type} />
    </Container>
  );
};

export default Input;
