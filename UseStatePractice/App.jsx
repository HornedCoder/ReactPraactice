import React, { use, useState } from 'react'

export default function () {
    const [count, setCount] = React.useState(0);

    function add(){
        setCount(prevCount=> prevCount+1)
    }

    function sub(){
        setCount(prevCount=> prevCount-1)
    }
    return (
        <main>
            <h1>Use State Practice</h1>

            <div id="Body">
                <button id="minus" onClick={sub}>-</button>
                <div id="State"><h2>{count}</h2></div>
                
                <button id="plus" onClick={add}>+</button>
            </div>
        </main>
    )
}