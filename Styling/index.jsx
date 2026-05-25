import {createRoot} from 'react-dom/client'
const root = createRoot(document.getElementById("root"))
import reactLogo from "./assets/react.svg"
import './index.css'

root.render(
  <>
    <Header />
    <Main />
    <Footer />
  </>
)

function Header(){
  return(
    <header>
      <img src={reactLogo}></img>
      <nav>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Main(){
  return(
    <main>
      <h1>Reason I am excited to learn React</h1>
      <ol>
        <li>React is a popular library, so I will be able to fit in with cool people.</li>
        <li>I need to get a Job ASAP</li>
      </ol>
    </main>
  )
}

function Footer(){
  return(
    <p>&copy; Kumar Ayush. All rights reserved.</p>
  )
}