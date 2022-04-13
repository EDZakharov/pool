
export const hashFilter = (props) => {
    if(props){
        if (props.hashrate <= 1000) {
            return Math.ceil(props.hashrate) + ' Hs'
        } else if(props.hashrate > 1000 && props.hashrate <= 1000000){
            return Math.ceil(props.hashrate / 1000) + ' kHs'
        } else if(props.hashrate > 1000000 && props.hashrate <= 1000000000){
            return Math.ceil(props.hashrate / 1000000) + ' MHs'
        } else if (props.hashrate > 1000000000) {
            return Math.ceil(props.hashrate / 1000000000)+ ' GHs'
        }
    } else return 0

}