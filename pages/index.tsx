import type { NextPage } from 'next'
import { useState } from 'react'
import Header from '../components/ui/Header'
import ImageCarousel from '../components/ui/ImageCarousel'
import About from '../components/ui/About'
import Projects from '../components/ui/Projects'
import Contact from '../components/ui/Contact'
import Menue from '../components/ui/Menue'
import Request from '../components/ui/Request'

const Home: NextPage = () => {
  const [request, setRequest] = useState<boolean>(false)
  const [menue, setMenue] = useState(false)

  const menueHandler = (): void => {
    setMenue(state => !state)
  }
  const requestHandler = (): void => {
    setRequest(state => !state)
  }

  return (
    <div>
      {request && <Request menueHandler={menueHandler} requestHandler={requestHandler} />}
      {menue && !request && <Menue menueHandler={menueHandler} requestHandler={requestHandler} />}
      {!menue && !request && <div className='' >
        <Header menueHandler={menueHandler} requestHandler={requestHandler} />
        <ImageCarousel />
        <About />
        <Projects />
        <Contact requestHandler={requestHandler} />
      </div>}
    </div>

  )
}

export default Home
