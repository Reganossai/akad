import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { saveAuthToken } from "./redux/Auth/auth-actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthenticatedRoutes, GuestRoutes } from "./routes";
import { HomePage } from "./pages";
import { Loading } from "./components";
import { ROUTES } from "./constants/routes.constants";

function App({ saveToken }) {
  const [appReady, setAppReady] = useState(false);

  const setUserTokenToReduxStateFromLocalStorage = useCallback(() => {
    const storedToken = localStorage.getItem("user-token");
    if (storedToken) {
      saveToken(storedToken);
    }
  }, [saveToken]);

  const handleAppLoad = useCallback(() => {
    setUserTokenToReduxStateFromLocalStorage();
    setAppReady(true);
  }, [saveToken]);

  useEffect(() => {
    handleAppLoad();
  }, [handleAppLoad]);

  if (!appReady) {
    return <Loading />;
  }

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path={ROUTES.AUTH}>
            <GuestRoutes />
          </Route>
          <Route path={ROUTES.DASHBOARD}>
            <AuthenticatedRoutes />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveToken: (token) => dispatch(saveAuthToken(token)),
  };
};

export default connect(null, mapDispatchToProps)(App);
