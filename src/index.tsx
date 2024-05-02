/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Router, Route } from "@solidjs/router";
import { AllContextProvider } from "./context/AllContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";

render(
  () => (
    <AllContextProvider>
      <Router root={App}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/characters" component={Characters} />
      </Router>
    </AllContextProvider>
  ),
  document.getElementById("root") as HTMLElement
);
