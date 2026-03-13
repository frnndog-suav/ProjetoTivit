import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: <!-- This is a common pattern when we are sure that the element exists. -->
createRoot(document.getElementById("root")!).render(<App />);
