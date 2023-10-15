import {
  BrowserRouter ,
  Routes ,
  Route
} from "react-router-dom"
import User from "./pages/User";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user" element = {<User/>} />
          <Route path="/" element = {<Add/>} />
          <Route path="/update" element = {<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
