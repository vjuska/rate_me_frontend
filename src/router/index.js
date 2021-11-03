import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PhotosIndex from "../views/PhotosIndex.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import RaterSignup from "../views/RaterSignup.vue";
import RaterLogin from "../views/RaterLogin.vue";
import PhotosNew from "../views/PhotosNew.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/photos",
    name: "photos-index",
    component: PhotosIndex,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/ratersignup",
    name: "ratersignup",
    component: RaterSignup,
  },
  {
    path: "/raterlogin",
    name: "raterlogin",
    component: RaterLogin,
  },
  {
    path: "/photos/new",
    name: "photos-new",
    component: PhotosNew,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
