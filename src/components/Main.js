import React, { Component } from 'react';
import Profile from './Profile';
import DataViewContainer from './DataViewContainer';
import nba from 'nba';

class Main extends Component {
    state = {
        playerId: 201939,
        playerInfo: {},
    }
    componentDidMount() {
        nba.stats.playerInfo({ PlayerID: this.state.playerId })
            .then((info) => {
                const playerInfo = Object.assign({},
                    info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log("final player info", playerInfo);
                this.setState({ playerInfo });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo}/>
                <DataViewContainer playerId={this.state.playerId}/>
            </div>
        );
    }
}

export default Main;