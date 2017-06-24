const ws = new WebSocket('ws://echo.websocket.org');
const WS_REQUEST = 'WS_REQUEST';
const WS_SUCCESS = 'WS_SUCCESS';

const initialState = {
    connected: false,
    data: false,
    message: null,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case WS_REQUEST:
            return Object.assign({}, state, {
                connected: true,
                data: false,
            });
        case WS_SUCCESS:
            return Object.assign({}, state, {
                isConnecting: false,
                data: action.data,
                message: null,
            });
        default:
            return state;
    }
}

function requestSocket() {
    return {
        type: WS_REQUEST,
    };
}

function receiveSocket(data) {
    return {
        type: WS_SUCCESS,
        data,
    };
}

export function connectToSocket() {
    return (dispatch) => {
        ws.onopen = () => dispatch(requestSocket());
        ws.onmessage = (evt) => dispatch(receiveSocket(evt.data));
    };
}

export function dispatchMessage(props) {
    return () => {
        setInterval(() => {
            ws.send(`${props} ${Math.floor((Math.random() * 10) + 1)}`);
        }, 500);
    };
}
