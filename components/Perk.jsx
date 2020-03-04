import React, { Component } from 'react'
import Perklevel from '../components/Perklevel';

import image_placeholder from "../assets/404Code.jpg";

export default class Perk extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            title: this.props.title,
            perkLevel: 0,
            oldElementTarget: null
        })
    }
    
    PerklevelClicked (e, perkLevel) {
        // if not previously assigned set opacity 1
        console.log("PerklevelClicked", this.state.title, perkLevel);
        e.target.style.opacity = '1';
        this.setState({
            perkLevel: perkLevel,
            oldElementTarget: e.target
        })
        // if  previously assigned set opacity .6 to old element and 1 to new element
        this.state.oldElementTarget ? this.state.oldElementTarget.style.opacity = '0.6' : null;

        //save perkLevel to state from each perk
        this.props.updatePerkLevelList({
            title: this.state.title, 
            perkLevel: perkLevel
        })
    }

    render() {
        return (
            <div className="perktree-container">
                <ul className="perk">
                    <li className="perk-level title"><span>{this.props.title}</span></li>
                    <Perklevel onClick={(e) => this.PerklevelClicked(e, 1)} image={image_placeholder}/>
                    <Perklevel onClick={(e) => this.PerklevelClicked(e, 2)} image={image_placeholder}/>
                    <Perklevel onClick={(e) => this.PerklevelClicked(e, 3)} image={image_placeholder}/>
                    <Perklevel onClick={(e) => this.PerklevelClicked(e, 4)} image={image_placeholder}/>
                    <Perklevel onClick={(e) => this.PerklevelClicked(e, 5)} image={image_placeholder}/>
                </ul>
            </div>    
        )
    }
}
