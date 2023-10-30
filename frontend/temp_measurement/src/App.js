import './App.css';
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Login from "./components/LoginPg/Login";
import FrontPage from "./components/FrontPg/FrontPage";
function App() {
    return (
       <Router>
           <Routes>
               <Route path={"/"} element={<FrontPage/>}/>
               <Route path={"/login"} element={<Login/>} />
           </Routes>
       </Router>
    );
}

export default App;
