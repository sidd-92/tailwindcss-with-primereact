import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
//link names
//page names
// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Page404 = React.lazy(() => import("./components/views/Page404"));
const PageHome = React.lazy(() => import("./components/views/PageHome"));
class App extends Component {
  render() {
    return (
      <Router basename="/">
        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/home"
              name="Home"
              render={(props) => <PageHome {...props} />}
            />
            <Route
              path="/"
              name="Admin"
              render={(props) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
