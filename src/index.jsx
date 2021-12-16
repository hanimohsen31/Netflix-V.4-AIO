import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import {  ApiContextProvider,AuthContextProvider } from "../src/Context";


ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ApiContextProvider baseURL="http://localhost:8000/">
      <App />
      </ApiContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);