import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


function render(Component){

    ReactDOM.render(
        <MuiThemeProvider>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </MuiThemeProvider>,
        document.getElementById("root")
    );

}

injectTapEventPlugin();
render(App);

/*
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
*/

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    });
}



registerServiceWorker();