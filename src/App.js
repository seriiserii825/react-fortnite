import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Shop />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
