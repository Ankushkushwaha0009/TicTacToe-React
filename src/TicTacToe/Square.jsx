
import React from "react";

const Square = (props) => {
    return (

        <div
            onClick={props.onclick}

            style={{

                border: '1px solid',
                height: "100px",
                width: "40%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"

            }}
            className="square">
            <h5>{props.value}</h5>
        </div>
    )
}

export default Square;

