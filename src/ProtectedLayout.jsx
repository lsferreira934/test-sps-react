import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

export default function ProtectedLayout() {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
