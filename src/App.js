import "./App.css";
import Header from "./Components/Header/Header";
import Routers from "./Routes/Routes";
import Footer from "./Components/Footer/Footer";
// import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
