import About from "./components/About";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Team from "./components/Team";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import Accordion from "./components/Accordion";
function App() {
  const [lang, setLang] = useState("en");
  return (
    <BrowserRouter>
      <header className="shadow-md h-10 flex items-center px-5 justify-between">
        <div className="logo">
          <h4>Learn</h4>
        </div>
        <div className="flex">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/accordion">Accordion</Link>

          </nav>
          <select
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
            }}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="sp">Spanish</option>
            <option value="ru">russion</option>
          </select>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/team" element={<Team />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/accordion" element={<Accordion />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
