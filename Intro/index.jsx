import { createRoot } from 'react-dom/client'
import './index.css'
import reactLogo from './assets/react.svg'

createRoot(document.getElementById('root')).render(
    <main>
      <h1>React</h1>
      <img src={reactLogo}></img>
      <h1 id='lol'> Fun Fact about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on gitHub</li>
        <li>Is maintained by meta</li>
        <li>Powers thousands of enterprise apps , including mobile apps</li>
      </ul>
    </main>
)


