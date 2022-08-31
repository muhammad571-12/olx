import "./App.css";
import Navbar from "./components/Navbar";
import Qidiruv from "./components/Qidiruv/Qidiruv";
import Product from "./components/Product/Product";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Navbar/>
            <Qidiruv/>
      <Product/>
      <Home />
    </div>
  );
}

export default App;
