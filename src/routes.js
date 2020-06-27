import React from "react";

//links
export const linkAbout = "/about";
export const linkPage404 = "/404";
export const linkPageHome = "/home";

//linknames
export const linkNameAbout = "About";
export const linkNamePage404 = "404";
export const linkNamePageHome = "Home";

//imports
const PageAbout = React.lazy(() => import("./components/views/About"));
const Page404 = React.lazy(() => import("./components/views/Page404"));

const routes = [
  { path: "/", exact: true, name: "Home", component: () => <div>Home</div> },
  { path: linkAbout, exact: true, name: linkNameAbout, component: PageAbout },

  { path: linkPage404, exact: true, name: linkNamePage404, component: Page404 },
];

export default routes;
