import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Title from './components/Titre'
import Bouton from './components/Bouton'
import Image from './components/Image'

function App() {

  return (
    <>
      <div>
        <Title level={1} text="je test"></Title>
        <Bouton text="{}" isDisabled={true}></Bouton>
        <Image url="https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg" height={0} width={0}></Image>
      </div>
    </>
  )
}

export default App
