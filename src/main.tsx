import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";

import "antd/dist/reset.css";
import "./styles/App.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#D6232A",
          borderRadius: 8,
          colorBgBase: "#0B0B0B",
          colorText: "#FFFFFF"
        }
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);