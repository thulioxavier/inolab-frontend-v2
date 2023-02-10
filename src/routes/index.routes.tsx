import { Routes, Route } from "react-router-dom";
import { Login } from "../views";

export const appRoutes = () => {
  return (
    <Routes>
      <Route path="/auth">
        <Route path="sign-in" element={<Login />} />
      </Route>

      <Route path="/" element={<Login />} />

      <Route path="*" element={<Login />} />
    </Routes>
  );
};
