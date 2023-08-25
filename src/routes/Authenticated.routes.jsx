import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Dashboard, Admission, AdmissionSuccess } from "../pages";
import {
  Personalinformation,
  Guardianinformation,
  Previouseducation,
} from "../components";
import { connect } from "react-redux";
import { ROUTES } from "../constants";

const App = ({ token }) => {
  if (!token) {
    return <Redirect to={ROUTES.AUTH} />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.DASHBOARD}>
          <Dashboard />
        </Route>
        <Route exact path={ROUTES.ADMISSION}>
          <Admission />
        </Route>
        <Route path={ROUTES.PERSONAL_INFORMATION}>
          <Personalinformation />
        </Route>

        <Route path={ROUTES.GUARDIAN_INFORMATION}>
          <Guardianinformation />
        </Route>

        <Route path={ROUTES.PREVIOUS_EDUCATION}>
          <Previouseducation />
        </Route>

        <Route path="/admission-success">
          <AdmissionSuccess />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export const AuthenticatedRoutes = connect(mapStateToProps)(App);
