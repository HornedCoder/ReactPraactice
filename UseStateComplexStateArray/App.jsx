import React from "react"
export default function App(){

    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    const [myFavThings, setMyFavThings] = React.useState([])

    const myFavThingsElement = myFavThings.map((item)=>{return(
        <p>{item}</p>
    )})

    function add(){
        setMyFavThings(prev=>[...prev, allFavoriteThings[prev.length]])
    }
    return(
        <main>
            <button onClick={add}>Add Items</button>
            <section>
                {myFavThingsElement}
            </section>
        </main>
    )
}