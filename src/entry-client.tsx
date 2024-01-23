import "./index.css";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./app";

const rootElem = document.getElementById("root")!;

hydrateRoot(
  rootElem,
  <StrictMode>
    <App />
  </StrictMode>
);
