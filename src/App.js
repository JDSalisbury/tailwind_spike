import "./App.css";
import Home from "./views/Home";
import Team from "./views/Team";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 bg-img-main ">
        <div class="bg-img-minor">
          <div class="relative py-3 sm:max-w-xl sm:mx-auto ">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div class="max-w-md mx-auto">
                <Switch>
                  <Route path="/team">
                    <Team />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
