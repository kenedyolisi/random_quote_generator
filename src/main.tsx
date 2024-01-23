import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const rootElem = document.getElementById("root")!;

createRoot(rootElem).render(
  <StrictMode>
    <App />
  </StrictMode>
);
