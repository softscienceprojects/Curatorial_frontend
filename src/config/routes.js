import Home from "../components/Home";
import SignIn from "..components/SignIn";
import SignUp from "..components/SignUp";
import Users from "../components/Users";
import Search from "../components/Search";

export const routes = [
  {
    title: "Home",
    path: "/",
    component: Home
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
    title: "Users",
    path: "/users",
    component: Users
  },
  {
    title: "Log out",
    path: "/logout",
    component: props => {
      props.logout();
      return null;}
  },
  {
    title: "Search",
    path: "/search",
    component: Search
  }
];
