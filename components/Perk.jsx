import React, { Component } from 'react'
import Perklevel from '../components/Perklevel';

import image_placeholder from "../assets/404Code.jpg";

export default class Perk extends Component {
    constructor(props) {
        super(props);
    
    }
    
    PerklevelClicked () {
        console.log("PerklevelClicked");
        
    }

    render() {
        return (
                <div className="perktree-container">
                    <ul className="perk">
                        <li className="perk-level title"><span>{this.props.title}</span></li>
                        <Perklevel onClick={() => this.PerklevelClicked()} image={image_placeholder}/>
                        <Perklevel image={image_placeholder}/>
                        <Perklevel image={image_placeholder}/>
                        <Perklevel image={image_placeholder}/>
                        <Perklevel image={image_placeholder}/>
                    </ul>
                </div>    
        )
    }
}
