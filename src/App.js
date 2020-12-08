import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home/Home";
import LeasesInformation from "./containers/LeasesInformation/LeasesInformation";
import Navbar from "./containers/Navbar/Navbar";
import Footer from "./containers/footer/footer";
import Notfound from "./containers/notfound/notfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/leaseInfor/:id" component={LeasesInformation} />
          <Route exact path="*" component={Notfound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
