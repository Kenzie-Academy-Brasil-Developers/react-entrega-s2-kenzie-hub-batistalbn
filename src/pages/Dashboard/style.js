import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 80px;
  padding: 15px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 800px) {
    width: 80vw;
    margin: 30px 0px;
  }

  img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 150px;
  }
`;

export const Body = styled.div`
  display: flex;
  width: 100vw;

  @media screen and (min-width: 800px) {
    width: 80vw;
  }
`;
