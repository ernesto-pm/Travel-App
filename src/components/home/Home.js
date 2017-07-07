import React, { Component } from "react"
import AnimatedWrapper from "../../wrappers/AnimatedWrapper"
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from "react-router-dom"
import './home.css'

class HomeComponent extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="container-fluid">
                    <div className="jumbotron">
                        <h1 style={{fontWeight: 100}}>Welcome home</h1>
                        <p>Either you live here or you are just visiting, we want to help as much as we can.</p>
                        <br/>
                        <br/>

                        <RaisedButton label="Start Exploring Now" backgroundColor='#d94f5c' labelColor='#fff' containerElement={<Link to="/locations" />}/>
                    </div>
                </div>

            </div>
        )
    }
}

const Home = AnimatedWrapper(HomeComponent);
export default Home;