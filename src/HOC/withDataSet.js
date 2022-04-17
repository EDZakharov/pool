import React from "react";

export const withDataSet = (Component) => {
    return (props) => {
        if(props.content.coins.length === 0){
            props.addCoinThunk()
            return <Component {...props}/>
        } else
            return <Component {...props}/>
    }
}
export const withDataMinersSet = (Component) => {
    return (props) => {
        // console.log(props.content.miners)
        if(props.content.miners.length === 0){
            props.addMinersThunk(window.location.pathname.slice(1))
            return <Component {...props}/>
        } else {
            setInterval(()=>{
                // props.addMinersThunk(window.location.pathname.slice(1))
            },2000)
            return <Component {...props}/>
        }

    }
}


