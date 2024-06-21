import { Switch } from "react-router-dom";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { Route } from "./route";
import { SignUp } from "../pages/signup";
import { PageNotFound } from "../pages/Err";
import { useAuth } from "../contexts/AuthContext";

export const Routes = () => {
  const { accessToken } = useAuth();
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route component={PageNotFound} isPrivate={!!accessToken} />
    </Switch>
  );
};
