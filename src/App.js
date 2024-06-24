import { Provider } from "react-redux";
import "./App.css";
import Boday from "./Components/Boday";
import appStore from "./Utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Boday />
    </Provider>
  );
}

export default App;
