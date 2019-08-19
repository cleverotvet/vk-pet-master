import React from 'react';
import connect from '@vkontakte/vkui-connect';
import {View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import PeticSignature from './panels/PeticSignature';
import './App.css';
import FinishPanel from "./panels/FinishPanel";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'home',
            fetchedUser: null,
        };
    }


    componentDidMount() {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    this.setState({fetchedUser: e.detail.data});
                    break;
                case 'VKWebAppShareResult' :
                    this.setState({activePanel: 'FinishPanel'});
                default:
                console.log(e.detail.type);
            }
        });
        connect.send('VKWebAppGetUserInfo', {});

    }

    go = (e) => {
        this.setState({activePanel: e.currentTarget.dataset.to})
    };

    sendFriends = () => {
        connect.send("VKWebAppShare", {})

    };

    render() {
        return (
            <div className="viewBlock">
                <View activePanel={this.state.activePanel}>
                    <Home id="home" fetchedUser={this.state.fetchedUser} go={this.go}/>
                    <PeticSignature sendFriends={this.sendFriends} id="PeticSignature" go={this.go}/>
                    <FinishPanel id="FinishPanel" go={this.go}/>
                </View>
            </div>

        );
    }
}

export default App;
