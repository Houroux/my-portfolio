import Header from "./components/Header";
import First from "./components/First";
import Presentation from "./components/Presentation";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas, far);

function App() {
  return (
    <div className="h-screen w-screen bg-orange-100 text-zinc-800">
      {/* // <div
    //   className="h-screen w-screen bg-cover bg-center"
    //   style={{
    //     backgroundImage: "url('./img/developpeur-web.webp')",
    //   }}
    // > */}
      <Header></Header>
      <First></First>
      <Presentation></Presentation>
    </div>
  );
}

export default App;
