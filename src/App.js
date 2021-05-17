import Searchbox from "./Searchbox.js";
import Cityname from "./Cityname.js";
import Weather from "./Weather.js";
import Footer from "./Footer.js";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Searchbox />
            <Cityname />
            <Weather />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

//export default App;
