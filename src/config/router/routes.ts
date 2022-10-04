import About from "views/About";
import Home from "views/Home";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
];
