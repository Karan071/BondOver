import { Route, Routes } from "react-router-dom";
import Landing from "./page/Landing.jsx";
import PartnerInterest from "./page/PartnerInterest/PartnerInterest.jsx";
import Sponser from "./page/Sponsor/Sponser.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/partner" element={<PartnerInterest/>}/>
      <Route path="/sponser" element={<Sponser/>} />
      {/* <Route path="/register" element={} /> */}
      
    </Routes>
    </>
  );
}

export default App;
