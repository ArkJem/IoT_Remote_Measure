import L from "leaflet";
import { useEffect } from "react";

export default function MapComponent() {
    const storedData = localStorage.getItem("tempAvg");
    const fetchTemp = async () => {
        try {
            const response = await fetch("https://danepubliczne.imgw.pl/api/data/synop", {
                method: 'GET',
            });
            const data = await response.json();
            if (data) {
                localStorage.setItem("TEMPS", JSON.stringify(data));
                console.log("ok");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTemp();
    }, []);

    useEffect(() => {
        let map;
            map = L.map("map").setView([52.237049, 21.017532], 6);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "&copy; OpenStreetMap contributors",
            }).addTo(map);

        const cityCoordinates = {
            "Bia\u0142ystok": {"lat": "53.132398", "lon": "23.1591679"}, "Bielsko Bia\u0142a": {"lat": "49.822118", "lon": "19.0448936"}, "Chojnice": {"lat": "53.6952912", "lon": "17.5614973"}, "Cz\u0119stochowa": {"lat": "50.8120466", "lon": "19.113213"}, "Elbl\u0105g": {"lat": "54.1558708", "lon": "19.4044583"}, "Gda\u0144sk": {"lat": "54.3482907", "lon": "18.6540233"}, "Gorz\u00f3w": {"lat": "50.0799574", "lon": "19.2325957"}, "Hel": {"lat": "60.32181555", "lon": "24.94736111181276"}, "Jelenia G\u00f3ra": {"lat": "50.8501049", "lon": "15.653749235408073"}, "Kalisz": {"lat": "51.74736505", "lon": "18.079590087700034"}, "Kasprowy Wierch": {"lat": "49.2318014", "lon": "19.9815609"}, "Katowice": {"lat": "50.2598987", "lon": "19.0215852"}, "K\u0119trzyn": {"lat": "54.0819763", "lon": "21.376828104006"}, "Kielce": {"lat": "50.8719903", "lon": "20.6310488"}, "K\u0142odzko": {"lat": "50.43371175", "lon": "16.642246491692106"}, "Ko\u0142o": {"lat": "52.2019866", "lon": "18.6359912"}, "Ko\u0142obrzeg": {"lat": "54.1759614", "lon": "15.5764209"}, "Koszalin": {"lat": "54.19092", "lon": "16.17707"}, "Kozienice": {"lat": "51.5849678", "lon": "21.549883"}, "Krak\u00f3w": {"lat": "50.0469432", "lon": "19.997153435836697"}, "Krosno": {"lat": "49.6938045", "lon": "21.7651458"}, "Legnica": {"lat": "51.2081617", "lon": "16.1603187"}, "Lesko": {"lat": "49.4689014", "lon": "22.3303816"}, "Leszno": {"lat": "51.8436498", "lon": "16.5744141"}, "L\u0119bork": {"lat": "54.5391501", "lon": "17.7472272"}, "Lublin": {"lat": "51.250559", "lon": "22.5701022"}, "\u0141eba": {"lat": "54.7585207", "lon": "17.555417"}, "\u0141\u00f3d\u017a": {"lat": "51.7728245", "lon": "19.478485931307937"}, "Miko\u0142ajki": {"lat": "53.7981816", "lon": "21.5772462"}, "M\u0142awa": {"lat": "53.1116182", "lon": "20.3831732"}, "Nowy S\u0105cz": {"lat": "49.6249173", "lon": "20.691346"}, "Olsztyn": {"lat": "53.7767239", "lon": "20.477780523409734"}, "Opole": {"lat": "50.6668184", "lon": "17.9236408"}, "Ostro\u0142\u0119ka": {"lat": "53.0843135", "lon": "21.5668607"}, "Pi\u0142a": {"lat": "53.1511324", "lon": "16.7380343"}, "Platforma": {"lat": "50.43339845", "lon": "30.507225857683157"}, "P\u0142ock": {"lat": "52.535347099999996", "lon": "19.713630138580008"}, "Pozna\u0144": {"lat": "52.4082663", "lon": "16.9335199"}, "Przemy\u015bl": {"lat": "49.7845132", "lon": "22.7698454"}, "Racib\u00f3rz": {"lat": "50.0917343", "lon": "18.2196766"}, "Resko": {"lat": "53.7733969", "lon": "15.4056058"}, "Rzesz\u00f3w": {"lat": "50.0374531", "lon": "22.0047174"}, "Sandomierz": {"lat": "50.6793066", "lon": "21.7495055"}, "Siedlce": {"lat": "52.1663751", "lon": "22.2765138"}, "S\u0142ubice": {"lat": "52.3557481", "lon": "14.5662367"}, "Sulej\u00f3w": {"lat": "51.3549202", "lon": "19.8890802"}, "Suwa\u0142ki": {"lat": "54.0990636", "lon": "22.9279363"}, "Szczecin": {"lat": "53.4301818", "lon": "14.5509623"}, "Szczecinek": {"lat": "53.708021", "lon": "16.6943922"}, "\u015anie\u017cka": {"lat": "50.7359438", "lon": "15.7397826"}, "\u015awinouj\u015bcie": {"lat": "53.827032849999995", "lon": "14.335691469388852"}, "Tarn\u00f3w": {"lat": "50.0123784", "lon": "20.9880739"}, "Terespol": {"lat": "52.0756167", "lon": "23.6133645"}, "Toru\u0144": {"lat": "53.0102721", "lon": "18.6048094"}, "Ustka": {"lat": "54.5811254", "lon": "16.8612962"}, "Warszawa": {"lat": "52.2319581", "lon": "21.0067249"}, "Wielu\u0144": {"lat": "51.2205345", "lon": "18.5701081"}, "W\u0142odawa": {"lat": "51.5466412", "lon": "23.553219"}, "Wroc\u0142aw": {"lat": "51.1089776", "lon": "17.0326689"}, "Zakopane": {"lat": "49.2757934", "lon": "19.969281065702543"}, "Zamo\u015b\u0107": {"lat": "50.7170854", "lon": "23.2525711"}, "Zielona G\u00f3ra": {"lat": "51.9383777", "lon": "15.5050408"}
        };

        const temps = JSON.parse(localStorage.getItem("TEMPS")) || {};


        for (const city in cityCoordinates) {
            const { lat, lon } = cityCoordinates[city];
            const temperatureData = temps.find(temp => temp.stacja === city);
            const temperature = temperatureData ? temperatureData.temperatura : "Brak danych";
            L.marker([parseFloat(lat), parseFloat(lon)],
            {
                icon: createCustomIcon()
            })
                .addTo(map)
                .bindPopup(`${city}: ${temperature}°C <br> Rzeszów:${storedData}°C  `);
        }

        return () => {
            if (map) {
                map.remove();
            }}
    }, []);
    const createCustomIcon = () => {
        const iconHtml = `<div style="background-color: #3498db; color: #fff; border-radius: 50%; width: 10px; height: 10px; text-align: center; line-height: 24px; font-weight: bold;"></div>`;
        return L.divIcon({
            className: "custom-icon",
            html: iconHtml,
        });}

    return <div id="map" style={{ height: "660px" }} />;}