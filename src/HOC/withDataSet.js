<<<<<<< HEAD
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



=======
>>>>>>> 71e8514da567b6dab1ed89278cf1204ffb95682a
