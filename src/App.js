/** @format */

import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomeScreen} />
    </Router>
  );
}

export default App;
