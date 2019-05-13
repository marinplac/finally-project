import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Welcome from "./welcome";
import App from "./app";

let elem;

if (location.pathname == "/welcome") {
    elem = <Welcome />;
} else {
    elem = (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(elem, document.querySelector("main"));
