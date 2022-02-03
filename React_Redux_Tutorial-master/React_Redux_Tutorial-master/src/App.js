import Header from "./containers/Header";
import "./App.css";
import {BrowserRouter as Routers, Switch, Route} from 'react-router-dom';
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routers>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetails} />
        <Route>404 Not Found!</Route>
      </Switch>

      </Routers>
        
    </div>
  );
}

export default App;
