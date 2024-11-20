import React, { useState, useRef } from 'react';

// components
import {
    MapContainer,
    Marker,
    TileLayer,
    Popup
} from "react-leaflet"

// styles & services
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"


const MapPicker = (props: any) => {
    const { handlerSetCoordsData, setAdvanceData } = props;
    const [searchQuery, setSearchQuery] = useState('');
    const [selectPlacementQuery, setSelectPlacementQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [coords, setCoords] = useState<any>([50.444729, 30.529419]);
    const mapRef = useRef<any>(null);

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;

        try {
            const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchQuery)}.json?access_token=pk.eyJ1Ijoia29tdm5pY2giLCJhIjoiY2xsNzdlOWk5MDlnODNtcm01djh5NmdhNyJ9.wo8ZmnDooommLMTRz4Gdvg`);
            const data = await response.json();

            setSearchResults(data.features);
        } catch (error) {
            console.error('Error while fetching search results:', error);
        }
    };

    const handleSelectLocation = (lat: any, lon: any, place: any) => {
        setCoords([lat, lon]);
        setSelectPlacementQuery(place);
        setSearchQuery('');
        setSearchResults([]);
        mapRef?.current?.setView([lat, lon], 16);

        handlerSetCoordsData({ placement: place, coords: [lat, lon] });
        setAdvanceData({ placement: place, coords: [lat, lon] });
    };

    return (
        <div className="bg-slate-300 relative p-[24px]">
            <div className="relative w-[450px]">
                <div className="flex gap-[12px]">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="h-[40px] w-full rounded-[4px] pl-[20px]"
                        placeholder="Введіть назву вулиці"
                    />
                    <button className="w-[150px] h-[40px] bg-blue-400 ml-[12px] rounded-[4px] text-[#eaeaea] font-bold mb-[20px]" onClick={handleSearch}>
                        Пошук
                    </button>
                </div>
                {searchResults?.length !== 0
                    ?
                    (
                        <div className="bg-white px-[4px] py-[6px] absolute left-0 top-[52px] z-[999999] flex flex-col items-start gap-[12px]">
                            {searchResults?.map((result: any, index) => (
                                <button
                                    className="text-left hover:bg-slate-400 w-full p-2 rounded-[4px]"
                                    key={index}
                                    onClick={() => handleSelectLocation(result?.center[1], result?.center[0], result?.place_name)}
                                >
                                    {result?.place_name}
                                </button>
                            ))}
                        </div>
                    )
                    :
                    null
                }
            </div>
            <MapContainer center={coords} zoom={8} scrollWheelZoom={false} style={{ height: '700px' }} ref={mapRef}>
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/komvnich/clp8g5zrb00b801r1hbeabony/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia29tdm5pY2giLCJhIjoiY2xsNzdlOWk5MDlnODNtcm01djh5NmdhNyJ9.wo8ZmnDooommLMTRz4Gdvg"
                />
                <Marker position={coords}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            <p className="text-[#363636] font-[500]">Обрана вулиці: {selectPlacementQuery}</p>
        </div>
    );
};

export default MapPicker;