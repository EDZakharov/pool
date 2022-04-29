import React from "react";

export const withDataMinersSet = (Component) => {
    return (props) => {
        let path = localStorage.getItem('selectedCoin')

        if(props.content.miners.length === 0){
            props.addMinersThunk(path)
            return <Component {...props}/>
        } else
            return <Component {...props}/>

    }
}



