import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import Footer from './Footer'
import Page from './Page'

createRoot(document.getElementById('root')).render(
  <main>
    <>
      <Header />
      <Page />
      <Footer />
    </>
  </main>
)



