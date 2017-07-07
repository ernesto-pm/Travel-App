import React, { Component } from "react"
import {Link}  from "react-router-dom"

class LocationsGridComponent extends Component {
    render() {
        return (
            <div className="text-center">
                <p>
                    This is the locations grid that queries the server to get all available locations.
                </p>
            </div>
        )
    }
}

export default LocationsGridComponent;