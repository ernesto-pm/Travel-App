import React, { Component } from "react";
import AnimatedWrapper from "../../wrappers/AnimatedWrapper";

class AboutComponent extends Component {
    render() {
        return (
            <div className="text-center">
                <h1 style={{fontWeight: 100}}>About Us</h1>
                <p>
                    This webpage aims to give foreigners and new-comers an insight of
                    how is life in certain U.S areas as well as giving them recommendations, tips and tricks.
                </p>

                <p>
                    It is also a database that contains useful information for people already living in those areas
                </p>

                <p>
                    And it is completely community-driven!
                </p>

                <p>
                    We hope you have fun exploring as much as we do.
                </p>

                <br/>

                <p>
                    -With Love, the TravelApp dev team.
                </p>

            </div>
        )
    }
}

const About = AnimatedWrapper(AboutComponent);
export default About;