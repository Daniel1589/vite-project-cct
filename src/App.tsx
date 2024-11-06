import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { Plans } from "./components/Plans";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { LogIn } from "./components/LogIn";
import { BookNow } from "./components/BookNow";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/plans" element={<Plans />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/booknow" element={<BookNow />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
