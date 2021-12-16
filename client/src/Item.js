import React from 'react'

const Item = ({price,beads,clips,string}) => {
    return (
        <div>
            <h1>Price:{price}</h1>
            <h2>Beads{beads}</h2>
            <h2>Clips{clips}</h2>
            <h2>String{string}</h2>
        </div>
    )
}

export default Item
