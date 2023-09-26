import { useRoutes } from "react-router-dom";

import { Album } from "../pages/Album/Album";
import { Home } from "../pages/Home";
import { Photo } from "../pages/Photo";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/album/:id", element: <Album /> },
    { path: "/photo/:id", element: <Photo /> },
  ]);
};
