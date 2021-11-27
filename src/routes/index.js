import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home/index";
import Signup from "../pages/Signup";
import SignupTech from "../pages/SignupTech";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [tech, setTech] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  const navigation = (path) => {
    history.push(path);
  };

  return (
    <Switch>
      <Route exact path="/">
        <Home
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          navigation={navigation}
        />
      </Route>
      <Route exact path="/signup">
        <Signup authenticated={authenticated} />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setTech={setTech}
          tech={tech}
        />
      </Route>
      <Route exact path="/signuptech">
        <SignupTech setTech={setTech} />
      </Route>
    </Switch>
  );
};

export default Routes;
