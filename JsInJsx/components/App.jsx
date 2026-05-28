export default function App(){
    const hour = new Date().getHours()
    let timeOfDay

    if (hour < 12){
        timeOfDay = "morning"
    }
    else if(hour >12 && hour < 17){
        timeOfDay = "afternoon"
    }
    else if (hour <21){
        timeOfDay = "evening"
    }
    else{
        timeOfDay = "night"
    }

    return(
        <h1>Good {timeOfDay}</h1>
    )
}