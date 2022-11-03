import { Author } from "pages/Author";
import { AddAuthor } from "pages/Author";
import { Authors } from "pages/Authors";
import { Invention } from "pages/Invention";
import { AddInvention } from "pages/Invention";
import { Routes, Route } from "react-router-dom";

export const Home = () => {
  return (
    <Routes>
      <Route index element={<Authors />} />
      <Route path="/author/:id/" element={<Author />} />
      <Route path="/author/:id/invention/:id" element={<Invention />} />
      <Route path="/add_invention" element={<AddInvention />} />
      <Route path="/add_author" element={<AddAuthor />} />
    </Routes>
  );
};
