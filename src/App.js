import Routes from "./routes";
import GlobalStyle from "./style/global";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
