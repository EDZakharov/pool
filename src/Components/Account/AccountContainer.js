import AccountData from "./AccountData";
import {connect} from "react-redux";
import {clearCash, fetchingAccount} from "../../redux/accountReducer";
import {dellAccountData, showAccountData, showAccountDataOnce} from "../../redux/socketMiddleware";

 let mapStateToProps = (state) => {
    return {
        account: state.account
    }
}

export let AccountContainer = connect(mapStateToProps, {fetchingAccount,showAccountDataOnce,showAccountData,dellAccountData,clearCash})(AccountData)