import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Switch, Link, Route, useHistory } from "react-router-dom";
import "./App.css";
import MainPage from "./main";
import ProductPage from "./product";
import UploadPage from "./upload";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="img" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>

      <div id="body">
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

      <div id="footer"></div>
    </div>
  );
}

export default App;
