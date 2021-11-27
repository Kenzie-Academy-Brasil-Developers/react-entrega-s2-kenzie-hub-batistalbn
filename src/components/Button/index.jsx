import { Container } from "./style";

const Button = ({ text, colorSchema, type, ...rest }) => {
  return (
    <Container colorSchema={colorSchema} type={type} {...rest}>
      {text}
    </Container>
  );
};

export default Button;
