import "leaflet/dist/leaflet.css";
import MapComponent from "./MapComponent";

export default function ComaprePage() {
    return (
        <div>
            <h2>Mapa temperatur w miastach</h2>
            <div>
                <MapComponent/>
            </div>
        </div>
    );
}
