import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/navigation/Header";
import LoginForm from "./components/Forms/LoginForm";
import SignUpForm from "./components/Forms/SignUpForm";
import LandingPage from "./components/Pages/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
