import jokes from './jokesData.js'
import Joke from './Joke.jsx'

export default function App(props) {


    const jokeElements = jokes.map((joke) => {
        return <Joke setup = {joke.setup} punchline = {joke.punchline} />
    })

    return(
        <main>
            {jokeElements}
        </main>
    )
}