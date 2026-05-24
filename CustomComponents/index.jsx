import { createRoot } from 'react-dom/client'
import './index.css'
import reactImg from './assets/react.svg'

createRoot(document.getElementById('root')).render(
  <main>
    <Header />
    <Page />
    <Footer />
  </main>
)

function Header() {
  return (
    <img src={reactImg} alt='react logo' />
  )
}

function Footer() {
  return (
    <p><footer>&copy; 2026 Kumar Ayush development. All right reserved</footer></p>
  )
}


function Page() {
  return (
    <main>
      <h1>Reasons why I am excited to Learn React</h1>
      <ol>
        <li>React is a popular library, so I will be able to
          fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer
          if I know React</li>
      </ol>
    </main>
  )
}