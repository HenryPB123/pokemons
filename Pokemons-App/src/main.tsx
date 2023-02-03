import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, PokeDetail } from "./pages";
import PokemonProvider from "./context/PokemonContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:pokeId",
    element: <PokeDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>
);
