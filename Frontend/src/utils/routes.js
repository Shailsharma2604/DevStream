import { createBrowserRouter } from "react-router-dom";
import VideoLibrary from "../components/VideoLibrary";
import WatchPage from "../components/WatchPage";
import Body from "../components/Body";
import Results from "../components/Results";
import Login from "../components/Login";
import Signup from "../components/Signup";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoLibrary />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <Results />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
