import React, { Component } from 'react'
import Layout from '../components/Layout';
import Perk from '../components/Perk';

import '../style/perktree.scss';

export default class perktree extends Component {
    
    constructor(props) {
        super(props);

        this.state = ({
            perkLevelList: []
        })
    }

    //save perkLevel to state from each perk
    updatePerkLevelList(perkLevel) {
        // check if perklevel with same title as the new one exist in array
        let oldPerkLevel = this.state.perkLevelList.find( (perklevelitem) => {
            return perklevelitem.title == perkLevel.title
        });

        //if exist check position in array and replace with new perklevel
        if (oldPerkLevel) {
            //get index in array of old item
            this.state.perkLevelList[this.state.perkLevelList.indexOf(oldPerkLevel)] = perkLevel
        }
        // not exist in array just add it to the end of the array
        else {
            this.state.perkLevelList.push(perkLevel) 
        }
    }
    
    checkPerkLevels() {
        console.log("perkLevelList", this.state.perkLevelList);
    }
    

    render() {
        return (
            <Layout>
                <div className="perktree-container">
                    <Perk updatePerkLevelList={(perkLevel) => this.updatePerkLevelList(perkLevel)} title={"Strength"} />
                    <Perk updatePerkLevelList={(perkLevel) => this.updatePerkLevelList(perkLevel)} title={"Perception"} />
                    <Perk updatePerkLevelList={(perkLevel) => this.updatePerkLevelList(perkLevel)} title={"Endurance"} />
                    <Perk updatePerkLevelList={(perkLevel) => this.updatePerkLevelList(perkLevel)} title={"Agility"} />
                    <Perk updatePerkLevelList={(perkLevel) => this.updatePerkLevelList(perkLevel)} title={"Charisma"} />
                    <Perk updatePerkLevelList={(perkLevel) => this.updatePerkLevelList(perkLevel)} title={"Intelligence"} />
                </div>    
                <button onClick={() => this.checkPerkLevels()}>CLICK ME</button>
            </Layout>
        )
    }
}
