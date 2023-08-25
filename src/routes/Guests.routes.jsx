import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Login, Register, Landingpage, Registrationsuccess } from "../pages";
import { connect } from "react-redux";
import { ROUTES } from "../constants/routes.constants";

const App = ({ token }) => {
  if (token) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.AUTH}>
          <Landingpage />
        </Route>
        <Route path={ROUTES.LOGIN}>
          <Login />
        </Route>
        <Route path={ROUTES.SIGNUP}>
          <Register />
        </Route>
        <Route path={ROUTES.REGISTRATION_SUCCESSFULL}>
          <Registrationsuccess />
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

export const GuestRoutes = connect(mapStateToProps)(App);
