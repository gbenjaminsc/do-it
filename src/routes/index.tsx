import { Switch } from "react-router-dom";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { Route } from "./route";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);
