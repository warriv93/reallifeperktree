import React, { Component } from 'react'
import Layout from '../components/Layout';
import Perk from '../components/Perk';

import '../style/perktree.scss';

export default class perktree extends Component {
    
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <Layout>
                <div className="perktree-container">
                    <Perk title={"Strength"} />
                    <Perk title={"Perception"} />
                    <Perk title={"Endurance"} />
                    <Perk title={"Agility"} />
                    <Perk title={"Charisma"} />
                    <Perk title={"Intelligence"} />
                </div>    
            </Layout>
        )
    }
}
