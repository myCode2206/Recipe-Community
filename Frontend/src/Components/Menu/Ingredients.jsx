/* eslint-disable react/prop-types */
import React from 'react'

const Ingredients = (props) => {
        return(

            <>
                <p>
                    <span style={{ margin: "0 12px 0 0", fontWeight: "100px" }}>
                    {props.index}.
                    </span>
                    {props.step}
                </p>
            </>
        )
    }


export default Ingredients