import React from "react";
import {connect} from "react-redux";
import App from "./App";
// import {reloadAC} from "./redux/contentReducer";


let mapStateToProps = (state) => {
    return {path: state.eth.selectedCoin}
}

let mapDispatchToProps = (dispatch) => {
    return {
        // reload: () => {dispatch(reloadAC())}
    }
}


let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


export default AppContainer;