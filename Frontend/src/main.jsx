import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { appStore } from "./utils/appStore.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "./Pages/NotFound.jsx";

//Lezy Lodaing
const Home = lazy(() => import("./Pages/Home.jsx"));
const Login = lazy(() => import("./Pages/Login.jsx"));
const Watch = lazy(() => import("./Pages/Watch.jsx"));
const Channel = lazy(() => import("./Pages/Channel.jsx"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watch/:id",
        element: <Watch />,
      },
      {
        path: "/channel/:id",
        element: <Channel />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={routes} />
    </Suspense>
  </Provider>
);
