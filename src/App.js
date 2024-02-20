import "./App.css";
import { Buttonx } from "./Components/Buttonx";
import LoadingButton from "./Components/submit";
import pamplete from "./images/pamplete.jpeg";

function App() {
  return (
    <>
      <div className="main">
        <img src={pamplete} className="pamplete" width="90%" />
      </div>
      <LoadingButton />
    </>
  );
}

export default App;
