import { useContext } from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";
import CollectionPage from "./pages/CollectionPage";
import { MovieProvider } from "./store/MovieContext";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <MovieProvider>
      <Layout>
        <Switch>
          {authCtx.isLoggedIn && (
            <Route path="/" exact>
              <HomePage />
            </Route>
          )}
          {!authCtx.isLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}
          <Route path="/profile">
            {authCtx.isLoggedIn && <UserProfile />}
            {!authCtx.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          {authCtx.isLoggedIn && (
            <Route path="/collection">
              <CollectionPage />
            </Route>
          )}
          <Route path="*">
            <Redirect to="/auth" />
          </Route>
        </Switch>
      </Layout>
    </MovieProvider>
  );
}

export default App;
