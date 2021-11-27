import { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import Desconhecido from "../../assets/Desconhecido.png";
import { Body, Container } from "./style";
import LayoutContainer from "../../components/LayoutContainer";
import Tech from "../../components/Tech";
import Card from "../../components/Card";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [user] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || {}
  );

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <LayoutContainer>
      <Container>
        <Header />
        <img src={Desconhecido} alt="Avatar" />
      </Container>
      <Body>
        <Tech />
        <Card user={user} setAuthenticated={setAuthenticated} />
      </Body>
    </LayoutContainer>
  );
};

export default Dashboard;
