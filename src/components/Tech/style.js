import styled from "styled-components";

export const Container = styled.div`
  flex: 2;
  margin-right: 30px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  height: auto;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: #11995e;
    width: 43px;
    height: 34px;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 16px;
    border: none;
    border-radius: 5px;
  }
`;
