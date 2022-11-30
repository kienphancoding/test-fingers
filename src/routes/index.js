import Home from "../pages/Home";
import Statics from "../pages/Statics";
import Trophy from "../pages/Trophy";
import PageNotFound from "../pages/PageNotFound";

const routes = [
  { path: "/", component: Home },
  { path: "/trophy", component: Trophy },
  { path: "/statics", component: Statics },

  { path: "*", component: PageNotFound },
];

export { routes };
