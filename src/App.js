import { Route, Routes } from "react-router-dom";
import ListType from "./components/ListType";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthContext } from "./components/auth/AuthContext";
import { useContext } from "react";

function App() {

  const {user} = useContext(AuthContext)

  return (
    <div className="App">
      <Nav />
      <div className="w-full px-28 pt-20">
        <Routes>
          
          <Route path="/" element = {<Landing />} />
          <Route path="cottages" element = {<ListType type="cottages" />} />
          <Route path="homes" element = {<ListType type="homes" />} />
          <Route path="unique" element = {<ListType type="unique" />} />
          <Route path="signin" element = {<Signin />} />
          <Route path="signup" element = {<Signup />} />
          <Route path="destination" element = {user ? <Destination /> : <Signin />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
