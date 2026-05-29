import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Timeline from "./features/Timeline/Timeline";
import Auth from "./features/Auth/Auth";

function App() {
  useEffect(() => {
    async function testing() {
      const response = await fetch('http://localhost:3000/api/v1/test');
      const data = await response.json();
      console.log(data);
    }

    testing();
  }, []);
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Timeline />}/>
      <Route path="/auth" element={<Auth />}/>
    </Routes>
  </BrowserRouter>;
}

export default App;