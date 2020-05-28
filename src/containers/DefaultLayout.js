import { SlideMenu } from "primereact/slidemenu";
import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthValidator from "../components/AuthValidator";
import Loader from "../components/Loader";
import Header from "./Header";
import routes from "../routes";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          label: "Home Page",
          items: [
            {
              label: "View Profile",
              icon: "pi pi-fw pi-plus",
            },
            {
              label: "Edit Profile",
              icon: "pi pi-fw pi-plus",
            },
          ],
        },
        {
          label: "Experience",
          items: [
            {
              label: "Add Experience",
              icon: "pi pi-fw pi-plus",
            },
          ],
        },
        {
          label: "Education",
          items: [
            {
              label: "Add Education",
              icon: "pi pi-fw pi-plus",
            },
            {
              label: "View Education",
              icon: "pi pi-fw pi-plus",
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="container max-w-full">
        <Header />

        <div className="grid grid-rows-1 grid-cols-7">
          <div className="w-full col-span-1 text-text-onPrimary text-body1 shadow-md text-left p-1 border-r-2">
            <div
              className="text-body1 "
              style={{ height: "calc(100vh - 4rem)" }}
            >
              <SlideMenu
                model={this.state.items}
                className="w-full h-full"
                menuWidth="210"
              />
            </div>
          </div>
          <div
            className="col-span-6 pl-8 pr-8 overflow-y-scroll"
            style={{ height: "calc(100vh - 4rem)" }}
          >
            <main>
              <Suspense fallback={<Loader />}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props) => (
                          <AuthValidator
                            authorizedcomponent={route.component}
                            urlpath={route.path}
                            {...props}
                          />
                        )}
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to="/404" />
                </Switch>
              </Suspense>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
