import './App.css';
import {Link, Route, Router, Routes} from 'react-router-dom';
import {useTypingEffect} from "./hooks/typing-effect";
import {Button} from "@mui/material";
import Login from "./components/LoginPg/Login";

function App() {
    const text = useTypingEffect("ZDALNY POMIAR TEMPERATURY",150);
    return (
        <div className="App">
            {text}
            <div>
                <Button variant="contained" to="/login">
                    Zaloguj się
                </Button>
            </div>
        </div>
    );
}

export default App;
