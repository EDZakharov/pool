import {connect} from "react-redux";
import {fetching} from "../../../redux/contentReducer";
import HeaderPayments from "./HeaderPayments";
import {addMinersPaymentsData} from "../../../redux/addCoinThunk";






let mapStateToProps = (state) => {
    return {content: state.content}
}

let HeaderPaymentsContainer = connect(mapStateToProps, {fetching,addMinersPaymentsData})(HeaderPayments);


export default HeaderPaymentsContainer;


