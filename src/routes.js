import { createBrowserRouter } from "react-router-dom";
import UserService from "./services/UserService";
import Login from "./pages/SignIn";
import Users from "./pages/Users";
import Home from "./pages/Home";

import ProtectedLayout from "./ProtectedLayout";
import EditUser from "./pages/EditUser";
import CreateUser from "./pages/CreateUser";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },

  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: async () => {
          return await UserService.list();
        },
      },
      {
        path: "/user",
        element: <CreateUser />,
      },
      {
        path: "/user/:id",
        element: <EditUser />,
        loader: async ({ params }) => {
          const userId = params.id;
          return await UserService.get(userId);
        },
      },
    ],
  },
]);

export default router;
