import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import Auth from "./Components/Auth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={"/home"} element={<Home />} />
        <Route exact path={"/auth"} element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </Router>
  );
};

export default App;
