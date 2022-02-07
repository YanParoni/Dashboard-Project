import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./routes/Home";
import Edit from "./routes/Edit";
import Add from "./routes/Add";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeLoader from './services/themeLoader';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeLoader>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/addUser" element={<Add/>} />
        </Routes>
      </BrowserRouter>
      </ThemeLoader>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
