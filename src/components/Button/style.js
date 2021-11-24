import styled from "styled-components";

export const Container = styled.button`
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  background: ${(props) => (props.colorSchema ? "#d3d3d3" : "#403CAa")};
  color: ${(props) => (props.colorSchema ? "#808080" : "#fff")};

  :hover {
    border: 2px solid #d2691e;
  }
`;
