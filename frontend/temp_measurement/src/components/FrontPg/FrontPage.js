import {useTypingEffect} from "./hooks/typing-effect";
import "./FrontPage.css"
import {Button} from "@mui/material";
export default function FrontPage(){
    const text = useTypingEffect("ZDALNY POMIAR TEMPERATURY",150);
    return(
        <div className={'container'}>
            <div className='topMenu'>
                <div className={"table"}>
                <table>
                    <tr>
                        <th><a id={'link'} href="/">Strona Główna</a></th>
                        <th><a id={'link'} href={"/login"}>Zaloguj się</a></th>
                        <th><a id={'link'} href={""}>Kontakt</a></th>
                    </tr>
                </table>
                </div>
            </div>

            <div className={'main'}>
                dupa
            </div>

            <div className={'afterMain'}>
                dupa
            </div>

            <div className={'footer'}>
                dupa
            </div>


        </div>
    )
}