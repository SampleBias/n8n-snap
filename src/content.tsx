import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./ui/App";

const mount = document.createElement('div');
mount.id = 'snap-n8n-root';
document.body.appendChild(mount);

const root = createRoot(mount);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
); 