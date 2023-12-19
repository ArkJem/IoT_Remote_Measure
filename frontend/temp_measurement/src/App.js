import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { useState } from "react";
import { UserData } from "./Data";
import LoginPage from "./components/LoginPg/LoginPage";
import FrontPage from "./components/FrontPg/FrontPage";
import RegisterPage from "./components/RegisterPg/RegisterPage";
import LineChart from "./components/ChartsPg/LineChart";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import DashboardPage from "./components/DashboardPg/DashboardPage";
import LCharts from './components/ChartsPg/LCharts';
import ReadTempPage from "./components/ReadTempPg/ReadTempPage";

function App() {
    const login = localStorage.getItem('login');
    //const role = localStorage.getItem('role');
    return (
       <Router>
           <Routes>
               <Route path = "/dash" element = { login ?
                   <PrivateRoute>
                       <DashboardPage/>
                   </PrivateRoute>
                   :<LoginPage/>} />
               <Route path={"/"} element={<FrontPage/>}/>
               <Route path={"/login"} element={<LoginPage/>} />
               <Route path={"/register"} element={<RegisterPage/>} />
               <Route path={"/chart"} element={<LineChart />} />
               <Route path={"/Line"} element={<LCharts chartData={userData}/>} />

           </Routes>
       </Router>
    );
}

export default App;
