import { Container, Header } from "./style";
import { useHistory } from "react-router-dom";
import CardTech from "../CardTech";
import { useState, useEffect } from "react";
import api from "../../services/api";

const Tech = ({ setTech, tech }) => {
  const history = useHistory();
  const [token] = useState(localStorage.getItem("@KenzieHub:token") || "");
  console.log(tech);
  const loadTech = () => {
    api
      .get("/users/techs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTech(response);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTech();
  }, []);

  const register = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <Header>
        <h3>Minhas tecnologias</h3>
        <button onClick={() => register("/signuptech")}>+</button>
      </Header>
      {[
        { title: "React", status: "Iniciante" },
        { title: "Java", status: "Iniciante" },
      ].map((item) => (
        <CardTech key={item.title} title={item.title} status={item.status} />
      ))}
    </Container>
  );
};

export default Tech;
