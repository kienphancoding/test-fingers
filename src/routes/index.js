import Home from "../pages/Home";
import Trophy from "../pages/Trophy";
// import PageNotFound from "../pages/PageNotFound";

const routes = [
  { path: "/", component: Home },
  { path: "/trophy", component: Trophy },

  { path: "*", component: Home },
];

export { routes };
