/** @format */

import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import AddPostScreen from "./screens/AddPostScreen";
import PostScreen from "./screens/PostScreen";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomeScreen} />
      <Route path="/add" exact component={AddPostScreen} />
      <Route path="/post/:id" exact component={PostScreen} />
    </Router>
  );
}

export default App;
