import { createBrowserRouter } from "react-router-dom";
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import ForgotPassword from "./features/auth/pages/ForgetPassword";
import Home from "./features/posts/pages/Home";
import Profile from "./features/profile/pages/Profile";
import ExplorePage from "./features/explore/pages/ExplorePage";
import Setting from "./features/explore/pages/Setting";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgetpassword", element: <ForgotPassword /> },
  {path: "/home",element:<Home/>},
  {path:"/profile",element:<Profile/>},
  {path:"/explore",element:<ExplorePage/>},
  {path:"/setting" ,element:<Setting/>},
]);

export default routes;
