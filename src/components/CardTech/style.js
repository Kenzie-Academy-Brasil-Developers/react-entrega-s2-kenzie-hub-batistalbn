import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0px;
`;

export const Icon = styled.div`
  background: #d3d3d3;
  border-radius: 5px;
  color: #11995e;
  width: 71px;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin-right: 20px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    text-align: left;
  }

  p {
    background: #d3d3d3;
    color: #11995e;
    padding: 3px 10px;
    border-radius: 5px;
    margin-top: 5px;
  }
`;
