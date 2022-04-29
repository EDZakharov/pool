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



