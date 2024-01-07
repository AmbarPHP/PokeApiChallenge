

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

import PaginatedDataComponent from "./components/Pagination2";
const url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";

function App() {
  const routes = [
    { path: "/", component: <Home /> },
    { path: "/pagination", component: <PaginatedDataComponent data={url} /> },
    { path: "/pokemon/:name", component: <Home /> }


  ];

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, index) => {
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
