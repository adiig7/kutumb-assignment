import "./App.css";
import CreateQuotePage from "./components/pages/CreateQuotePage";
import LoginPage from "./components/pages/LoginPage";
import QuotesPage from "./components/pages/QuotesPage";
import { useAuth } from "./hooks/useAuth";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { token } = useAuth(); 

  return (
    <div className="flex justify-center bg-gray-300 w-full min-h-screen overflow-scroll">
      <ToastContainer />
      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/create"
          element={token ? <CreateQuotePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/"
          element={token ? <QuotesPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to={token ? "/" : "/login"} />} />
      </Routes>
    </div>
  );
}

export default App;
