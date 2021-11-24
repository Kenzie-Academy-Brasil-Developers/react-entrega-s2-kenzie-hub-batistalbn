import { Container } from "./style";

const Button = ({ text, colorSchema, ...rest }) => {
  return (
    <Container colorSchema={colorSchema} {...rest}>
      {text}
    </Container>
  );
};

export default Button;
