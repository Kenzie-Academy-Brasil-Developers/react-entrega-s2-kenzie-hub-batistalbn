import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  height: 365px;
  border-radius: 10px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  width: 100%;
  height: 104px;
  background: #403caa;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px 10px 0px 0px;

  img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 150px;
  }
`;

export const Data = styled.div`
  color: #ffffff;
  align-items: flex-start;
  margin-left: 10px;
  h2 {
    text-align: left;
    font-size: 16px;
  }
  p {
    text-align: left;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  border-radius: 0px 0px 10px 10px;
`;

export const Info = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
  background: #d3d3d3;
  border-radius: 5px;

  h4 {
    text-align: left;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    margin-top: 3px;
  }
`;

export const Icon = styled.div`
  background: ${(props) => (props.colorSchema ? "#403CAA" : "#11995E")};
  color: #ffffff;
  width: 50px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin-right: 10px;
`;
