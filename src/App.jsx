import Header from "./components/Header";
import First from "./components/First";
import Presentation from "./components/Presentation";
import Competences from "./components/Competences";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas, far);

function App() {
  return (
    <div>
      <Header></Header>
      <First></First>
      <Presentation></Presentation>
      <Competences></Competences>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
