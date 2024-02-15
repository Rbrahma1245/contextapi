import "./App.css";
import Homepage from "./Components/Homepage";
import APIContext from "./Components/Context/APIContext";

function App() {
  return (
    <>
      <APIContext>
        <Homepage />
      </APIContext>
    </>
  );
}

export default App;
