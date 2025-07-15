import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContxt } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(

    <AuthContxt>
      <App />
    </AuthContxt>

);
