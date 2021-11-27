import styled, { css } from "styled-components";

export const Label = styled.div`
  text-align: left;
  padding-left: 10px;

  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
    `}
  label {
    padding: 0px;
  }
`;

export const Container = styled.div`
  border-radius: 8px;
  padding: 5px 8px;
  background: #d3d3d3;
  border: 2px solid #d3d3d3;
  margin-bottom: 15px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    margin: 0;
    padding: 0px;
    font-size: 16px;
    width: 100%;
    border: none;
    background: transparent;
    color: #808080;
  }
`;
