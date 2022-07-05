import "./App.css";
import Map from "./components/Map/Map";
import CheckList from "./components/CheckList/CheckList";
import Flight from "./components/Map/Flight";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="App">
        <div>
          <Flight />
        </div>
        <Map />
        <CheckList />
      </div>
    </>
  );
}

export default App;
