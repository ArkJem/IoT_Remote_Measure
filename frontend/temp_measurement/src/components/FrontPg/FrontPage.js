import {useTypingEffect} from "./hooks/typing-effect";
import "./FrontPage.css"
import {Button} from "@mui/material";
export default function FrontPage(){
    const text = useTypingEffect("ZDALNY POMIAR TEMPERATURY",150);
    return(
            <div className={"frontPg"}>{text}
            <div>
                <Button className={"btn"} variant="contained" href={"/login"}>Zaloguj się </Button>
            </div>
            </div>
    )
}