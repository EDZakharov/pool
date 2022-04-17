import App from "./App";
import {connect} from "react-redux";


const mapStateToProps = (state) =>{
    return {content: state.content}

}


export let AppContainer = connect(mapStateToProps,)(App)