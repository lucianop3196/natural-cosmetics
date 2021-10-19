import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <h1>Proyecto de cosmética natural</h1>
        <ItemListContainer greeting="Aca se mostrarán todos mis productos"/>
      </header>
    </div>
  );
}

export default App;
