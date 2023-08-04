import Header from "./components/Header";
import First from "./components/First";
import Presentation from "./components/Presentation";
import Competences from "./components/Competences";
import Portfolio from "./components/Portfolio";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import PhotoDevWeb from "./img/developpeur-web.webp";

library.add(fab, fas, far);

function App() {
  return (
    <div className="box-border w-screen overflow-hidden bg-first text-zinc-800">
      {/* {// <div
    //   style={{
    //     backgroundImage: `url(${PhotoDevWeb})`,
    //   }}
    //   className="h-screen w-screen bg-cover bg-center"
    // >} */}
      <Header></Header>
      <First></First>
      <Presentation></Presentation>
      <Competences></Competences>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
