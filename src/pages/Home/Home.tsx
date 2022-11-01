import { Author } from "../Author";
import { Authors } from "../Authors";
import { Invention } from "../Invention";
import { Routes, Route } from "react-router-dom";

export const Home = () => {
  return (
    <Routes>
      <Route index element={<Authors />} />
      <Route path="/author/:id" element={<Author />} />
      <Route path="/invention/:id" element={<Invention />} />
    </Routes>
  );
};
