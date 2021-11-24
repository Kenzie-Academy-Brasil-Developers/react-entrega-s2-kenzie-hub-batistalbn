import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;

  h2 {
    margin-bottom: 40px;

    span {
      background: #403caa;
      color: #fff;
      font-size: 22px;
      padding: 4px 4px 0px 4px;
      border-radius: 3px;
      font-weight: 700;
    }
  }
`;

export const Form = styled.form`
  background: #ffffff;
  border: 2px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 10px;
  width: 90vw;
  height: auto;
  padding: 40px 20px 30px 20px;

  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: center;

    p {
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      color: #808080;
      margin-bottom: 6px;
      width: 60%;
      span {
        color: #000;
      }
    }
  }

  @media screen and (min-width: 800px) {
    width: 500px;
  }
`;
