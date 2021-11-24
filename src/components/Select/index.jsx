import { Container } from "./style";

const Select = ({ children }) => {
  return (
    <Container>
      <select>{children}</select>
    </Container>
  );
};

export default Select;
