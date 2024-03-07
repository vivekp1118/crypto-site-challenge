import { Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./Index";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/:id" element={<Index />} />
    </Routes>
  );
}
