import { Author } from "../../components/Author";
import { Authors } from "../../components/Authors";
import { Routes, Route } from "react-router-dom";

export const Home = () => {
  return (
    <Routes>
      <Route index element={<Authors />}></Route>
      <Route path="/author/:id" element={<Author />}></Route>
    </Routes>
  );
};
