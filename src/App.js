import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connectToSocket, dispatchMessage } from './Redux/SomeDucks';

class App extends Component {

    componentWillMount() {
        // will run before any rendering
        this.props.connectToSocket();
    }

    componentWillReceiveProps(nextProps) {
        // will run when props are updated
        if(nextProps.connected && nextProps.connected !== this.props.connected){
                this.props.dispatchMessage('we received ::: your account balance is');
        }
    }

    render() {
        // destructuring from props
        const { connected, data } = this.props;
        // this will run on mount as default state
        if (!connected) {
            return <span>loading...</span>
        }
        // if there is no data loaded
        if (!data) {
            return <span>were now connected to the socket</span>
        }
        // here we print out whatever we set so state var wsState
        return <span>{data}</span>;
    }

}

function mapStateToProps(state) {
    return {
        connected: state.someDucks.connected,
        data: state.someDucks.data,
    };
}


App = connect(mapStateToProps, { connectToSocket, dispatchMessage })(App);

export default App;
