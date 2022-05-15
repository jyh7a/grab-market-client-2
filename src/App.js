import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./main";
import ProductPage from "./product";
import UploadPage from "./upload";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={"/"}>
          <MainPage />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
