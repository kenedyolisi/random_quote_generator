import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./app";

export function render() {
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
  return { html };
}
