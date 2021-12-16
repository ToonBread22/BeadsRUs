import React,{useEffect, useState} from 'react'
import Item from './Item'

const Store = ({beads,string,clips,price}) => {
    //const FakeItems
        const [beads,setBeads] = useState([
            {
                price: "$15",
                beads: "original"
            }
        ])
    
    useEffect(() => {
        fetch('Items')
        .then(res => res.json(0)
        .then(data => {
            //setItems(data)
        })
        .catch(err => {console.error(err)})
    },[])

    return (
        <div>
           {beads.map((bead,i) =>
           <Item
                key={i}
                name={beads.name}
                price={beads.Price}
                string={beads.String}
                clip={beads.Clips}
            />
        )}
             
        </div>
    )
}

export default Store
