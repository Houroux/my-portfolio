import React from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Presentation from "./components/Presentation";
import Competences from "./components/Competences";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Localisation from "./components/Localisation";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas, far);

function App() {
  return (
    <div className="m-auto">
      <Header></Header>
      <Presentation></Presentation>
      <Buttons></Buttons>
      <Competences></Competences>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Localisation></Localisation>
    </div>
  );
}

export default App;
