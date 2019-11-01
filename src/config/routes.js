import Home from "../components/Home";
import Exhibitions from "../components/Exhibitions"
import Artworks from "../components/Artworks"
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Search from "../components/Search";
import Users from "../components/Users";

export const routes = [
  {
    title: "Home",
    path: "/",
    component: Home
  },
  {
    title: "Exhibitions",
    path: "/exhibitions",
    component: Exhibitions
  },
  {
    title: "Explore",
    path: "/explore",
    component: Artworks
  },
  {
    title: "Search",
    path: "/search",
    component: Search
  },
  {
    title: "Sign in",
    path: "/signin",
    component: SignIn
  },
  {
    title: "Sign up",
    path: "/signup",
    component: SignUp
  },
  {
    title: "Dashboard",
    path: `/users/`,
    component: Users
  },
  {
    title: "Log out",
    path: "/logout",
    component: props => {
      props.logout();
      return null;}
  }
];
