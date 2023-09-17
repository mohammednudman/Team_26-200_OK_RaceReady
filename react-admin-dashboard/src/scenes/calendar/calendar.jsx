import React, {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
import {Icon} from 'leaflet'; // Import Icon from leaflet
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Calender = () => {
    const [formData, setFormData] = useState({
        title: '',
        fees: '',
        date: '',
        city: '',
        place: '',
        sponsor: '',
        startLatitude: '',
        startLongitude: '',
        endLatitude: '',
        endLongitude: '',
    });

    const [distances, setDistances] = useState({
        '5km': false,
        '10km': false,
        '21km': false,
        '42km': false,
    });

    const handleCheckboxChange = (distance) => {
        setDistances((prevDistances) => ({
            ...prevDistances,
            [distance]: !prevDistances[distance],
        }));
    };

    const redIcon = new Icon({
        // iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x-red.png',
        // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconUrl: './loc_icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const [isUpdatingStart, setIsUpdatingStart] = useState(true);
    const [markers, setMarkers] = useState([]);
    const [startPoint, setStartPoint] = useState(null);
    const [endPoint, setEndPoint] = useState(null);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const [waterFacilitySpots, setWaterFacilitySpots] = useState([
        {id: 1, name: 'Spot 1', latitude: 19.0762, longitude: 72.8787},
        {id: 2, name: 'Spot 2', latitude: 19.0759, longitude: 72.8775},
        // Add more spots as needed
    ]);

    const MapClickHandler = () => {
        const map = useMapEvents({
            click(e) {
                const {lat, lng} = e.latlng;

                if (isUpdatingStart) {
                    setFormData({...formData, startLatitude: lat.toFixed(6), startLongitude: lng.toFixed(6)});
                } else {
                    setFormData({...formData, endLatitude: lat.toFixed(6), endLongitude: lng.toFixed(6)});
                }

                // Toggle the flag for the next click
                setIsUpdatingStart(!isUpdatingStart);

                if (!startPoint) {
                    setStartPoint({lat, lng});
                } else if (!endPoint) {
                    setEndPoint({lat, lng});
                }
            },
        });

        return null;
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        // backgroundColor: 'grey',  // Background color set to grey
        // color: 'white',
    };

    const startIcon = new Icon({
        iconUrl: '/path/to/start-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    const endIcon = new Icon({
        iconUrl: '/path/to/end-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    return (
        <div style={{padding: '20px'}}>
            <h2>Event Details</h2>
            {/* ...Other input fields */}


            {/* return ( */}
            <div>
                <p>Enter the title of the event</p><input type="text" placeholder="Title" style={inputStyle}/>
                <p>Enter the registration fees for the event</p><input type="text" placeholder="Fees"
                                                                       style={inputStyle}/>
                <p>Enter the date of the event</p><input type="date" style={inputStyle}/>
                <p>Enter the city where the event</p><input type="text" placeholder="City" style={inputStyle}/>
                <p>Enter the place where the event</p><input type="text" placeholder="Place" style={inputStyle}/>
                <p>Enter the name of the sponsor who is going to sponsor the event</p><input type="text"
                                                                                             placeholder="Sponsor"
                                                                                             style={inputStyle}/>
                {/* Add your map component here */}
            </div>
            <div>
                <h3>Marathon Distances:</h3>
                <label>
                    <input
                        type="checkbox"
                        checked={distances['5km']}
                        onChange={() => handleCheckboxChange('5km')}
                    />
                    5km
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={distances['10km']}
                        onChange={() => handleCheckboxChange('10km')}
                    />
                    10km
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={distances['21km']}
                        onChange={() => handleCheckboxChange('21km')}
                    />
                    21km
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={distances['42km']}
                        onChange={() => handleCheckboxChange('42km')}
                    />
                    42km
                </label>
            </div>
            {/* <div>
        Start Latitude: {startPoint ? startPoint.lat.toFixed(6) : 'Not set'}<br />
        Start Longitude: {startPoint ? startPoint.lng.toFixed(6) : 'Not set'}<br />
      </div>
      <div>
        End Latitude: {endPoint ? endPoint.lat.toFixed(6) : 'Not set'}<br />
        End Longitude: {endPoint ? endPoint.lng.toFixed(6) : 'Not set'}<br />
      </div> */}
            <p>Enter the longitudes and latitudes for the start point</p>
            <input type="text" name="startLatitude" placeholder="Start Latitude" value={formData.startLatitude}
                   onChange={handleInputChange} style={inputStyle}/>
            <input type="text" name="startLongitude" placeholder="Start Longitude" value={formData.startLongitude}
                   onChange={handleInputChange} style={inputStyle}/>
            <p>Enter the longitudes and latitudes for the end point</p>
            <input type="text" name="endLatitude" placeholder="End Latitude" value={formData.endLatitude}
                   onChange={handleInputChange} style={inputStyle}/>
            <input type="text" name="endLongitude" placeholder="End Longitude" value={formData.endLongitude}
                   onChange={handleInputChange} style={inputStyle}/>

            <div style={{marginTop: '20px', height: '400px'}}>
                <MapContainer center={[19.0760, 72.8777]} zoom={13} style={{height: '100%', width: '100%'}}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    {startPoint && (
                        <Marker position={startPoint} icon={redIcon}>
                            <Popup>Start Point</Popup>
                        </Marker>
                    )}
                    {endPoint && (
                        <Marker position={endPoint} icon={redIcon}>
                            <Popup>End Point</Popup>
                        </Marker>
                    )}

                    {/* Render water facility spots */}
                    {waterFacilitySpots.map((spot) => (
                        <Marker key={spot.id} position={[spot.latitude, spot.longitude]}>
                            <Popup>{spot.name}</Popup>
                        </Marker>
                    ))}

                    <MapClickHandler/>
                </MapContainer>
            </div>
        </div>
    );
};


export default Calender;
