import { lazy } from "react";

const Home = lazy(() =>
  import("../pages/index").then((module) => ({ default: module.Home }))
);
const About = lazy(() =>
  import("../pages/index").then((module) => ({ default: module.About }))
);
const Design = lazy(() =>
  import("../pages/index").then((module) => ({ default: module.Design }))
);

const Projects = lazy(() =>
  import("../pages/index").then((module) => ({ default: module.Projects }))
);

const PageNotFound = lazy(() =>
  import("../pages/index").then((module) => ({ default: module.PageNotFound }))
);

const route = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export default route;
