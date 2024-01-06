import "./FrontPage.css"
export default function FrontPage(){
    return(
        <div className={'container'}>
            <div className='topMenu'>
                <div className={"table"}>
                <table>
                    <tr>
                        <th><a id={'link'} href="/">Strona Główna</a></th>
                        <th><a id={'link'} href={"/login"}>Zaloguj się</a></th>
                        <th><a id={'link'} href={""}>Opis projetku</a></th>
                        <th><a id={'link'} href={""}>Kontakt</a></th>
                    </tr>
                </table>
                </div>
            </div>

            <div className={'main'}>
                <div className={'textMain'}>Monitoring temperatury</div>
                <div>Witaj! W tym projekcie został zaprojektowana strona wraz z pomiarem temperatury z pomocą Raspberry Pi Pico. Więcej w opisie projektu. </div>
                <div className={'buttonMain'}>
                    <a className={'btn'} href={'/login'}>Zaloguj się</a>
                    <a className={'btnSpec'}>Opis projektu</a>
                </div>
            </div>

            <div className={'afterMain'}>

            </div>

            <div className={'footer'}>
                <div className={'footerText'}>Made with love from &#x1F9E1;</div>
            </div>


        </div>
    )
}