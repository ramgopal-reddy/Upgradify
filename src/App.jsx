import { Route, Routes } from "react-router-dom";
import "./App.css";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
