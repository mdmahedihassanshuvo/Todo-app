import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AddTask from "../Page/AddTask";
import AllTask from "../Page/AllTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AddTask />,
      },
      {
        path: "/all",
        element: <AllTask />,
      },
    ],
  },
]);

export default router;
