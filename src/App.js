import "./styles.css";
import Redux from "./reduxHooks";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Redux />
      </Provider>
    </div>
  );
}
