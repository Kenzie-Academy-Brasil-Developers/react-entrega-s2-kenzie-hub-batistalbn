import { Container, Label } from "./style";

const Input = ({ label, placeholder, type, register, error, name }) => {
  return (
    <div>
      <Label isErrored={!!error}>
        <label>{label}</label>
        {!!error && <span> - {error}</span>}
      </Label>
      <Container isErrored={!!error}>
        <input placeholder={placeholder} type={type} {...register(name)} />
      </Container>
    </div>
  );
};

export default Input;
