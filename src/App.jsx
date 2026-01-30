import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MonsterPage from "./MonsterPage";
import ScrollTop from "./scrollTop";



export default function App() {
  return (
    <>
      <ScrollTop /> 
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/monsters/:id" element={<MonsterPage />} />
      </Routes>
    </>
  );
}
