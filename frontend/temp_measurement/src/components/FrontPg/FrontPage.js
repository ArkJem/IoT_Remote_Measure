import {useTypingEffect} from "./hooks/typing-effect";
import "./FrontPage.css"
export default function FrontPage(){
    const text = useTypingEffect("ZDALNY POMIAR TEMPERATURY",150);
    return(
        <div className={"frontPg"}>{text}</div>
    )
}