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
import Profile from "./components/Profile";

function App() {

  const {user} = useContext(AuthContext)

  window.onbeforeunload = function (e) {
    window.onunload = function () {
            window.localStorage.isMySessionActive = "false";
    }
    return undefined;
  };

  window.onload = function () {
            window.localStorage.isMySessionActive = "true";
  };

  return (
    <div className="App">
      <Nav />
      <div className="w-full md:px-28 px-8 pt-20">
        <Routes>
          
          <Route path="/" element = {<Landing />} />
          <Route path="profile" element = {user ? <Profile /> : <Signin />} />
          <Route path="cottages" element = {user ? <ListType type="cottages" /> : <Signin />} />
          <Route path="homes" element = {user ? <ListType type="homes" /> : <Signin />} />
          <Route path="unique" element = {user ? <ListType type="unique" /> : <Signin />} />
          <Route path="signin" element = {user ? <ListType /> : <Signin />} />
          <Route path="signup" element = {user ? <ListType /> : <Signup />} />
          <Route path="destination" element = {user ? <Destination /> : <Signin />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
