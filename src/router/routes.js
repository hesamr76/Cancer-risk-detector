const MainLayout = () => import("layouts/MainLayout.vue");
const homePage = () => import("pages/Index.vue");

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [{ path: "", component: homePage }]
  },
  {
    path: "*",
    component: homePage
  }
];

export default routes;
