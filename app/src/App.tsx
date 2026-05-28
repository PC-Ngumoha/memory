import { BrowserRouter, Routes, Route } from "react-router";
import Timeline from "./features/Timeline/Timeline";
import Auth from "./features/Auth/Auth";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Timeline />}/>
      <Route path="/auth" element={<Auth />}/>
    </Routes>
  </BrowserRouter>;
}

export default App;