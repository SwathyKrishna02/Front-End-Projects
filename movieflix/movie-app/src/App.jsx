import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import OpeningPage from "./Pages/OpeningPage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Movies from "./Pages/Movies";
import Shows from "./Pages/Shows";
import Subscription from "./Pages/Subscription";
import TopMovies from "./Pages/TopMovies";
import List from "./Pages/List";
import MainNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Payment from "./Components/Payment";
import User from "./Components/User";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminLogin from './Admin/AdminLogin'
function App(){
  return(
    <>
    <Router>
      <Routes>
      <Route path="/" element={<OpeningPage/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/forgot" element={<ForgotPassword/>}/>
      <Route path="/board" element={<Dashboard/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/shows" element={<Shows/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="/subscription" element={<Subscription/>}/>
      <Route path="/payment/:plan" element={<Payment />} />
      <Route path="/user" element={<User/>}/>
      <Route path="/top" element={<TopMovies/>}/>
      <Route path="/nav" element={<MainNavbar/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/admin-login" element={<AdminLogin/>}/>
      <Route path="/admin-dash" element={<AdminDashboard/>}/>
    
      </Routes>
    </Router>
    </>
  );
}

export default App;