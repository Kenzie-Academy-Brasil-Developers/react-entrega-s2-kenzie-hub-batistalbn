import { Container, Label } from "./style";

const Select = ({ children, label, register, name, error, placeholder }) => {
  return (
    <div>
      <Label isErrored={!!error}>
        <label>{label}</label>
        {!!error && <span> - {error}</span>}
      </Label>
      <Container isErrored={!!error}>
        <select placeholder={placeholder} {...register(name)}>
          {children}
        </select>
      </Container>
    </div>
  );
};

export default Select;
