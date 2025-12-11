import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { fiterData} from "./Data";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Filter fiterData={fiterData}></Filter>
      <Cards></Cards>
    </div>
  );
}

export default App;
