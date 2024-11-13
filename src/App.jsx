import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
