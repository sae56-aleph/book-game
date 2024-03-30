import './App.css'
import Title from './components/Titre'
import Bouton from './components/Bouton'
import Image from './components/Image'
import ActionSimple from './components/ActionSimple'

function App() {

  return (
    <>
      <div>
        <Title level={1} text="je test"></Title>
        <Bouton text="{}" isDisabled={false}></Bouton>
        <Image url="https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg" height={100} width={100}></Image>
        <ActionSimple target="https://example.com" text="Cliquez ici" onClick={console.log("test")}></ActionSimple>
      </div>
    </>
  )
}

export default App
