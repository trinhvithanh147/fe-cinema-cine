import { ToastContainer } from "react-toastify";
import AppRoutes from "./hooks/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
