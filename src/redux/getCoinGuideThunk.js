import axios from "axios";
import {addDesc} from "./coinPageReducer";


export let getCoinGuideThunk = pool => dispatch => {
    axios.get(`${process.env.PUBLIC_URL}/pools/${pool}/guide_RU.txt`)
        .then(res => {
            // console.log(res.data)
            dispatch(addDesc(res.data))
        })
        .catch(dispatch(addDesc('Loading...')))
}