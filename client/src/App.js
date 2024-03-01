import Home from "./pages/home/Home";
import TopBar from './components/topbar/TopBar'
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Context } from "./context/Context";
// import Contact from "./pages/contact/Contact";


function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route path="/register" element={user?<Home/>:<Register/>}></Route>
        <Route path="/login" element={user?<Home/>:<Login/>}></Route>
        <Route path="/write" element={user?<Write/>:<Register/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        {/* <Route path="/contact" element={<Contact/>}></Route> */}
        <Route path="/setting" element={user?<Setting/>:<Register/>}></Route>
        <Route path="/post/:postId" Component={Single}></Route>
      </Routes>

    </Router>

  );
}

export default App;
