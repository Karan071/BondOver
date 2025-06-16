import { Route, Routes } from "react-router-dom";
import Landing from "./page/Landing.jsx";
import PartnerInterest from "./page/PartnerInterest/PartnerInterest.jsx";
import Sponser from "./page/Sponsor/Sponser.jsx";
import Register from "./page/Register/Register.jsx";
import Join from "./page/Join/Join.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/partner" element={<PartnerInterest />} />
        <Route path="/sponser" element={<Sponser />} />
        <Route path="/register/:uuid" element={<Register />} />
        <Route path="/join" element={<Join />} />

      </Routes>
    </>
  );
}
export default App;
