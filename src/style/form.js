import styled from "styled-components";

export const Form = styled.form`
  background: #ffffff;
  border: 2px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 10px;
  width: 90vw;
  height: auto;
  padding: 40px 20px 30px 20px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    width: 500px;
  }
`;
