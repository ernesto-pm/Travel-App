import React, { Component } from "react"
import AnimatedWrapper from "../../wrappers/AnimatedWrapper"
import {Link}  from "react-router-dom"
import LocationsGrid from "./LocationsGrid"

class LocationsComponent extends Component {

    componentDidMount() {
        console.log("khe");
    }

    render() {
        return (
            <div className="text-center">
                <h1 style={{ fontWeight: 100 }}>Explore all Locations</h1>
                <hr style={{ width: 250 }}/>
                <p>We will continue to add new content as the community grows, you can learn how to help us <Link to='/about'> here.</Link></p>
                <br/>
                <LocationsGrid/>
            </div>
        )
    }
}

const Locations = AnimatedWrapper(LocationsComponent);
export default Locations;