import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Locations from './components/locations/Locations';
import Register from './components/register/Register';


const firstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};

class App extends Component {
    render() {
        return (
            <div>

                <Navbar/>

                <Route exact path="/" children={({ match, ...rest }) => (
                        <TransitionGroup component={firstChild}>
                            {match && <Home {...rest} />}
                        </TransitionGroup>
                    )}
                />

                <Route exact path="/about" children={({ match, ...rest }) => (
                        <TransitionGroup component={firstChild}>
                            {match && <About {...rest} />}
                        </TransitionGroup>
                    )}
                />

                <Route exact path="/locations" children={({ match, ...rest }) => (
                        <TransitionGroup component={firstChild}>
                            {match && <Locations {...rest} />}
                        </TransitionGroup>
                    )}
                />

                <Route exact path="/register" children={({ match, ...rest }) => (
                    <TransitionGroup component={firstChild}>
                        {match && <Register {...rest} />}
                    </TransitionGroup>
                )}
                />

            </div>
        );
    }
}

export default App;
