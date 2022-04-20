import Payments from "./Payments";
import {connect} from "react-redux";
import {addMinersPaymentsData} from "../../redux/addCoinThunk";

 let mapStateToProps = (state) => {
    return {
        content: state.content
    }
}

export let PaymentsContainer = connect(mapStateToProps, {addMinersPaymentsData})(Payments)