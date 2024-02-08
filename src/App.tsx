

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home2 from "./pages/Home2";
import Home from "./pages/Home";
import PokemonDetailView from "./components/PokemonDetailView";


//const url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";

interface Routes {
  path?: string;
  component: React.ComponentType<any>;
  element: React.ComponentType<any>;
  collapse?: Route[];
}


function App() {
  const routes = [
    { path: "/pokemons/", component: <Home /> },
    { path: "/", component: <Home /> },
    { path: "/home", component: <Home2 /> },
    { path: "single-pokemon/", component: <PokemonDetailView /> }


  ];

  const getRoutes: React.ComponentType<any> = (allRoutes: Routes[]) =>
    allRoutes.flatMap((route, index) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.path) {
        return (
          <Route
            path={route.path}
            element={route.component}
            key={index}
          />
        );
      }

      return null;
    });

  return (
    <div className="App">

      <div className="main">

        <Router>
          <Routes>{getRoutes(routes)}</Routes>
        </Router>

      </div>

    </div>
  )
}

export default App
