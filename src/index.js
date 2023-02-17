import { Welcome } from "./Welcome";
import { createRoot } from "react-dom/client";
import './index.css'

const root = createRoot(document.getElementById("root"))

root.render(<Welcome name="Baseey" />)