import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main  from "./components/Main";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/queries" element={<h1>Here you can send DB Queries</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
