import "./App.css";
import Header from "./component/Header/Header";
import Body from "./component/Body/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carts from "./component/carts/Carts";
import BodyHolder from "./component/Body/BodyHolder";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />
          <hr />
          <div className="">
            <Routes>
            <Route exact path="/" element={ <BodyHolder/>}/>
            <Route exact path="/Carts" element={ <Carts />}/>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
