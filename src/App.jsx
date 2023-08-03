import Header from "./components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas, far);

function App() {
  return (
    <div className="h-screen w-screen bg-gray-800">
      <Header></Header>
    </div>
  );
}

export default App;
