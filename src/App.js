import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route
              exact
              path="/category/:idCategory"
              component={ItemListContainer}
            />
            <Route exact path="/detail/:id" component={ItemDetailContainer} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
