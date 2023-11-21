import './App.css';
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Login from "./components/LoginPg/Login";
import FrontPage from "./components/FrontPg/FrontPage";
import RegisterPage from "./components/RegisterPg/RegisterPage";
import LineChart from "./components/ChartsPg/LineChart";

function App() {
    return (
       <Router>
           <Routes>
               <Route path={"/"} element={<FrontPage/>}/>
               <Route path={"/login"} element={<Login/>} />
               <Route path={"/register"} element={<RegisterPage/>} />
               <Route path={"/chart"} element={<LineChart/>} />

           </Routes>
       </Router>
    );
}

export default App;
