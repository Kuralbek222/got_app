import React, { useState,useEffect } from 'react';
import './itemList.css';
import Spinner from '../spinner'
// import { arrayOf } from 'prop-types';
 function ItemList ({onItemSelected,renderItem,getData}) {
    const [itemData, updateList ] = useState([])
    useEffect(()=>{
    getData()   
    .then((data) => {
     updateList(data)
        })
    },[])
    function renderItems(arr) {
        return arr.map((item,i) => {
            const {id} = item
            const label = renderItem(item)
            return (
            <li  key={id}  className="list-group-item" onClick={() =>onItemSelected(id,item) } >
                    {label}
                </li>
            )
        })
    }
    
if (!itemData) {
    return <Spinner />
}
        const items = renderItems(itemData)
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
}   




export default ItemList