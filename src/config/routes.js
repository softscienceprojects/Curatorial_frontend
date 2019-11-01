import Home from "../components/Home";
import Exhibitions from "../components/Exhibitions";
import Artworks from "../components/Artworks";
import Search from "../components/Search";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Users from "../components/Users";

const routes = [
  {
    title: "Home",
    path: "/",
    component: Home,
    auth: false
  },
  {
    title: "Exhibitions",
    path: "/exhibitions",
    component: Exhibitions,
    auth: false
  },
  {
    title: "Explore",
    path: "/explore",
    component: Artworks,
    auth: false
  },
  {
    title: "Search",
    path: "/search",
    component: Search,
    auth: false
  },
  {
    title: "Dashboard",
    path: "/users",
    component: Users,
    auth: true
  },
  {
    title: "Log out",
    path: "/logout",
    auth: true,
    component: props => {
      props.logout();
      return null;
    }
  },
  {
    title: "Sign in",
    path: "/signin",
    component: SignIn,
    auth: false,
    hideAuth: true
  },
  {
    title: "Sign up",
    path: "/signup",
    component: SignUp,
    auth: false,
    hideAuth: true
  }
];

// const loggedInRoutes = [
//   {
//     title: "Dashboard",
//     path: "/users",
//     component: Users,
//     auth: true
//   },
//   {
//     title: "Log out",
//     path: "/logout",
//     auth: true,
//     component: props => {
//       props.logout();
//       return null;
//     }
//   }
// ];

// const loggedOutRoutes = [
//   {
//     title: "Sign in",
//     path: "/signin",
//     component: SignIn,
//     auth: false
//   },
//   {
//     title: "Sign up",
//     path: "/signup",
//     component: SignUp,
//     auth: false
//   }
// ];

export { routes };
