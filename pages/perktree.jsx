import React, { Component } from 'react'
import Layout from '../components/Layout';


import '../style/perktree.scss';

export default class perktree extends Component {
    
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <Layout>
                
                <div className="perktree-container">
                    <ul>
                        <li className="perk">
                            <div className="perk-image"></div>
                            hej
                        </li>
                        <li className="perk">
                            <div className="perk-image"></div>
                        </li>
                        <li className="perk">
                            <div className="perk-image"></div>
                        </li>
                        <li className="perk">
                            <div className="perk-image"></div>
                        </li>
                        <li className="perk">
                            <div className="perk-image"></div>
                        </li>
                        <li className="perk">
                            <div className="perk-image"></div>
                        </li>
                    </ul>                          
                </div>    
            </Layout>
        )
    }
}
