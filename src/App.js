/** @format */

import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import AddPostScreen from "./screens/AddPostScreen";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomeScreen} />
      <Route path="/add" exact component={AddPostScreen} />
    </Router>
  );
}

export default App;
