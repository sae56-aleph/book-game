import Titre from "./components/Titre";
import Bouton from "./components/Bouton";
import Image from "./components/Image";
import ActionSimple from "./components/ActionSimple";
import Bloc from "./components/Bloc";

function App() {
  return (
    <>
      <div>
        <Titre level={1} text="je test" />
        <Bouton text="{}" />
        <Image
          url="https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg"
          height={100}
          width={100}
        />
        <ActionSimple
          target="https://example.com"
          text="Cliquez ici"
          onClick={console.log("test")}
        />
        <Bloc>
          <p>Enzooooo</p>
        </Bloc>
      </div>
    </>
  );
}

export default App;
