import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/home";
import Register from "./Components/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          {/* <Route exact path="/debugapalooza" element={<DebugaPalooza />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
