import "./App.css";
import Routes from "./routes";
import { GlobalStyle } from "../src/global/index";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
