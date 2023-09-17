import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet'; // Import Icon from leaflet
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import axios from "axios";

const URL = "https://4ded-49-248-167-18.ngrok-free.app/api/admin"

// const Calender = () => {
//   const [formData, setFormData] = useState({
//     eventName: '',
//     description: '',
//     fees: '',
//     date: '',
//     city: '',
//     place: '',
//     sponsor: '',
//     startLatitude: '',
//     startLongitude: '',
//     endLatitude: '',
//     endLongitude: '',
//   });

const Calender = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        eventDate: '',
        fees: '',
        startingPoint: { latitude: '', longitude: '' },
        endingPoint: { latitude: '', longitude: '' },
        firstAidHalts: [],
        refreshmentHalts: [],
        description: '',
        organizer: '',
        sponsors: [],
        marathonType: [],
        registrationDeadline: '',
    });

    const handleInputChange = (field, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [field]: value
        }));
    };


    const [marathonType, setDistances] = useState({
        '5km': false,
        '10km': false,
        '21km': false,
        '42km': false,
    });

    const handleCheckboxChange = (marathonType) => {
        setDistances((prevDistances) => ({
            ...prevDistances,
            [marathonType]: !prevDistances[marathonType],
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // Filter out distances that are not selected
            const selectedDistances = Object.keys(marathonType).filter(key => marathonType[key]);

            // Combine the form data with selected distances and water facility data
            const eventData = {
                ...formData,
                marathonType: selectedDistances,
                refreshmentHalts: refreshmentHalts.map(spot => ({
                    latitude: spot.latitude,
                    longitude: spot.longitude
                }))
            };

            console.log(eventData);

            // Send a POST request to your server with event details
            const response = await axios.post(`${URL}/add-event`, eventData);

            // Handle the response as needed
            console.log('Event details sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending event details:', error);
        }
    };


    const redIcon = new Icon({
        // iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x-red.png',
        // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNElEQVR4nN2UTUrEQBCF+xIObh134l4F9Qx5r+2VC++icwcZPYDgUpiFVxAZvcNsFX8hVgkT6WAkdGLoNiOID2pV4X2vqqkY8+9VAAMBRkreCPDqS4GpAEe+18tcACfks5JFW/neG7DXx3z+nXkNMk+GlGvpSK4hBHgqnFtKST9qSfqgwNiXAI8t/cNogJK3oXnu3ErVz8lhAwJMUyZ4CQDHjRB+muDBUwBhunHLlKfhlNEAJa8bKyKHVT/PstUwhJBX/R4ZpeGJr96PLMB6zA1o/RacW4sGfEIuE+5gYlKl1m7EXrJm2VYyoISQ5xETnJmfqnBuWYD7jvR3/hvTR2LtQcfu93uZf0GASQMAXJhFqQAGSs5qgFnS3zNGCmwKIEK+a5ZtL9TcVBByV63d+RXzP6sPxtjrDvz7pwcAAAAASUVORK5CYII=', iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const greenIcon = new Icon({
        // iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x-red.png',
        // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKElEQVR4nO2Z30tUQRTHp19YZBFRWBQEURAUJARlUZ7ZDWMfQp/mnF0NfAuCnizooQcpRHoL9SGrv6CgHnoQJPXMppmG1EtQr0VIWkGRhpm1MbuLRuo612bu3o2+cGC5e5l7P/ec852Ze4X4r/k6NlC7AVilpKZbkumpZBqXjNO5oHFgGjb/AWPSnCuiphPphu1S0w1gmpSaMjaRP/c2sNpT7PsXia5EmdR4FTRO2ALMC8ZpYLxmxhLFEHBqCzCllw0wD4gGgdW2kCHwgGR84wxirtxem7FDgYj3JCt8QPwOE+9JVniFAG5ca0rAF4SchcHHXnvGNLZvCDkXrd4s9q/cKXiJfTvZX7/bOYiZJ0LMRiZfYjedQgCrcqnpS+ggGifMtV2CpILdAE0BY5vsSx6p6T6z3oT5LTW1m/+CjBXTCp2BZNdO9hBvY714sMBDqTTnBOiVTncgZgFomYlCEH/AWGUGNA65A9H43rI52wKM2WE55pgzEGOFNheNp9Vh+zGxyjbLwhmIbRkEcJi8Ey7dJ0xfHYLgO9cgiaGGjXYgOOoMRGp8WbzSwhfuQJgeWNplu4dmv+cORFOrbWMaa7WyX0sDAcYrzkDM7BpkQiwEE3RCjOlkrTOQ44/UVmD8YQ2TfdrYYfrAGICJaq2O5o7ZZULm4rsxBeFSUtPzADfgKvqdQhRhU5XJZ/aicxDg1L5QQZh+xnrrdwkfkozPQsuGJi18CZjOhZaRNJFHEFUOmj75LyscPTRydo3wKanpeggZuSx8C7hhZ9DtaqDeYPwMXLfJO0gOhjo9grSIsBTvUTt8vOMCpo+nBtVmEabMYs4DyHkRtqoG1TqXL7NB0yvvTrWYZFo1OszGaVE0ZZpXgqYRByAPRbEFrCqzHzuXn4nJap3aK6IgabmDXCSaRFSU6EqUmZcEy8jGsLqrVokoCcxuUNNMAJeaivUm94soChhb7DOCF0RUBQyrQdPA0iWF3cbxRJQFuUXlhwIQY+YznigFyT6qM1vVBfpiplona0QpSWpsXiAjl0TJKSNWANOdWQjG++aYKEVBdmuMQ1LTE6cfNcU/rF9NQCQ2ISXBfwAAAABJRU5ErkJggg==', iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const blueIcon = new Icon({
        // iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x-red.png',
        // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADMElEQVR4nO2Zy2sUQRDGyxcqPhBRohic7d6NShQUBB8nT95Ebz5OngVPKnjwIEoI3iTx4OsvUNCDByF4mGzX7uZB0EtA8RLcbNXuJhEUE0lidKR3Fo3mYY/pnt0VP2hYZoaa+W19Vd09A/Bfc7U7M7pBKjonkR9IRf0CaUQomq4MpBGJ1BeeK5zV10K9aWd6ZLtQdFcqnpDIgdEIr32YzOVTtX5+SD1/u1oouimRxo0BfhthtviWjgW10C6ftkik9N8CzAXinOeXt8UKIbPFfQI5bwtilt3e6dixQIieUpMTiFkwoqfU5BTC84fWaAs4g8CqzZCzTmsmLGy3EPJnZtqdtdildKe/KP6pFixJ6yCVeSKubOAPi923CtHql9cLpE9xg0ikcX1vayDVZUeUf3JSIHckVPFwU1dxnR76t0Du1OeixEpg8bQ9EL0+Mvd2IYHD+xeK5WUKB/Q15vHonj0QRf2mmVgM4hcY48xQrzUQgTxqCNJhGlMqvmOYkbI9EMVTRjdNFw+ZxvSwdMQ0y2ANxNAGUTqMvtbIWoo/WwORikq2QVK9YxsNa4QtgvDrmllL0aBNkGeGfu50UOxPbIK0mxambq1/iledS8waCNINayB6do0yIS4GE3VCTGQKJ62BpBRvlYq+RoCZ0tbRdaAbgB7JTOGoPmaaCRlm44tuCmBTUvEr0wewNhQjNPSmCqu2Qr5iHcTL0p54s0HfEln2wIUE8sv4YKgbXEkqvhAXSDJTOOMMJFwf0YcYssEHB4JV4FJC8W3XIELxNXCtlD/cHHW7Gg2CPnr+0CaIQ3r76dBWbRCXWnL5HU7ecSl+35zLb4Y4pRdz1m2FdBHiVnMuv9bqy2zFb5x3qoUkkc/bK/LiCaiZgmC5QB6wAPICai2vsr+g6SVYakJ2D7dAPUga7iDntxRfgnpRKvwoOhgdhPrgcbAC6kle5a0IzZi3Wp5MYnEv1KMkUlsEkMtQrzrmBysFcsagwLt0x4N6VkovKhWPLVzcVNaf8aARlEzTKb1Vnae4ZwTScWgkScXX5wG5Cg2nIFgmFT2aNV881cegEdUabo17paIeqx814R/Wd4UU/pXv+gUqAAAAAElFTkSuQmCC', iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const [isUpdatingStart, setIsUpdatingStart] = useState(true);
    const [markers, setMarkers] = useState([]);
    const [startPoint, setStartPoint] = useState(null);
    const [endPoint, setEndPoint] = useState(null);
    const [refreshmentHalts, setWaterFacilitySpots] = useState([]);

    const [isInWaterFacilityMode, setIsInWaterFacilityMode] = useState(false);

    const toggleWaterFacilityMode = () => {
        setIsInWaterFacilityMode((prev) => !prev);
    };

    // const handleInputChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({ ...formData, [name]: value });
    // };

    // const [waterFacilitySpots, setWaterFacilitySpots] = useState([
    //   { id: 1, name: 'Spot 1', latitude: 19.0762, longitude: 72.8787 },
    //   { id: 2, name: 'Spot 2', latitude: 19.0759, longitude: 72.8775 },
    //   // Add more spots as needed
    // ]);

    const MapClickHandler = () => {
        const map = useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;

                // if (isUpdatingStart) {
                //   setFormData({ ...formData, startingPoint.latitude: lat.toFixed(6), startingPoint.longitude: lng.toFixed(6) });
                // } else {
                //   setFormData({ ...formData, endingPoint.latitude: lat.toFixed(6), endingPoint.longitude: lng.toFixed(6) });
                // }

                if (isUpdatingStart) {
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        startingPoint: {
                            ...prevFormData.startingPoint,
                            latitude: lat.toFixed(6),
                            longitude: lng.toFixed(6),
                        },
                    }));
                } else {
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        endingPoint: {
                            ...prevFormData.endingPoint,
                            latitude: lat.toFixed(6),
                            longitude: lng.toFixed(6),
                        },
                    }));
                }


                // Toggle the flag for the next click
                setIsUpdatingStart(!isUpdatingStart);

                // if (!isInWaterFacilityMode) {
                if (!startPoint) {
                    setStartPoint({ lat, lng });
                } else if (!endPoint) {
                    setEndPoint({ lat, lng });
                }
                // }


                // Create a new spot object for the clicked location
                else {
                    const newSpot = {
                        id: new Date().getTime(), // Unique ID for the spot
                        name: `Spot ${new Date().getTime()}`,
                        latitude: lat,
                        longitude: lng,
                    };

                    // Update the water facility spots with the new spot
                    setWaterFacilitySpots((prevSpots) => [...prevSpots, newSpot]);
                }

            },
        });

        return null;
    };

    // const WaterFacilityHandler = () => {
    //   const map = useMapEvents({
    //     click(e) {
    //       const { lat, lng } = e.latlng;

    //       // Create a new spot object for the clicked location
    //       const newSpot = {
    //         id: new Date().getTime(), // Unique ID for the spot
    //         name: `Spot ${new Date().getTime()}`,
    //         latitude: lat,
    //         longitude: lng,
    //       };

    //       // Update the water facility spots with the new spot
    //       setWaterFacilitySpots((prevSpots) => [...prevSpots, newSpot]);
    //     },
    //   });

    //   return null;
    // };


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
        <div style={{ padding: '20px' }}>
            <h2>Event Details</h2>
            {/* ...Other input fields */}


            {/* return ( */}
            <div>
                <b><p>Enter the title of the event</p><input type="text" placeholder="Title" style={inputStyle} onChange={(e) => handleInputChange('eventName', e.target.value)} /></b>
                <b><p>Enter the description of the event</p><input type="text" placeholder="Title" style={inputStyle} onChange={(e) => handleInputChange('description', e.target.value)} /></b>
                <b><p>Enter the registration fees for the event</p><input type="text" placeholder="Fees" style={inputStyle} onChange={(e) => handleInputChange('fees', e.target.value)} /></b>
                <b><p>Enter the registration deadline for the event</p><input type="date" placeholder="Fees" style={inputStyle} onChange={(e) => handleInputChange('registrationDeadline', e.target.value)} /></b>
                <b><p>Enter the date of the event</p><input type="date" style={inputStyle} onChange={(e) => handleInputChange('eventDate', e.target.value)} /></b>
                <b><p>Enter the city where the event</p><input type="text" placeholder="City" style={inputStyle} onChange={(e) => handleInputChange('city', e.target.value)} /></b>
                <b><p>Enter the place where the event</p><input type="text" placeholder="Place" style={inputStyle} onChange={(e) => handleInputChange('place', e.target.value)} /></b>
                <b><p>Enter the name of the sponsor who is going to sponsor the event</p><input type="text" placeholder="Sponsor" style={inputStyle} onChange={(e) => handleInputChange('sponsors', e.target.value)} /></b>
                <b><p>Enter the name of the organizer who is going to organize the event</p><input type="text" placeholder="Sponsor" style={inputStyle} onChange={(e) => handleInputChange('organizer', e.target.value)} /></b>

                {/* Add your map component here */}
            </div>
            <div>
                <h3>Marathon Distances:</h3>
                <label>
                    <input
                        type="checkbox"
                        checked={marathonType['5km']}
                        onChange={() => handleCheckboxChange('5km')}
                    />
                    5km
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={marathonType['10km']}
                        onChange={() => handleCheckboxChange('10km')}
                    />
                    10km
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={marathonType['21km']}
                        onChange={() => handleCheckboxChange('21km')}
                    />
                    21km
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={marathonType['42km']}
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
            {/* <p>Enter the longitudes and latitudes for the start point</p>
      <input type="text" name="startLatitude" placeholder="Start Latitude" value={formData.startLatitude} onChange={handleInputChange} style={inputStyle} />
      <input type="text" name="startLongitude" placeholder="Start Longitude" value={formData.startLongitude} onChange={handleInputChange} style={inputStyle}/>
      <p>Enter the longitudes and latitudes for the end point</p>
      <input type="text" name="endLatitude" placeholder="End Latitude" value={formData.endLatitude} onChange={handleInputChange} style={inputStyle}/>
      <input type="text" name="endLongitude" placeholder="End Longitude" value={formData.endLongitude} onChange={handleInputChange} style={inputStyle}/> */}
            <b><p>Add START POINT, END POINT and WATER FACILITY SPOTS</p></b>
            <div style={{ marginTop: '20px', height: '400px' }}>
                <MapContainer center={[19.0760, 72.8777]} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {startPoint && (
                        <Marker position={startPoint} icon={redIcon}>
                            <Popup>Start Point</Popup>
                        </Marker>
                    )}
                    {endPoint && (
                        <Marker position={endPoint} icon={greenIcon}>
                            <Popup>End Point</Popup>
                        </Marker>
                    )}


                    {/* Render water facility spots */}
                    {refreshmentHalts.map((spot) => (
                        <Marker
                            key={spot.id}
                            position={[spot.latitude, spot.longitude]}
                            icon={blueIcon}  // Use your desired icon here
                        >
                            <Popup>{spot.name}</Popup>
                        </Marker>
                    ))}

                    <MapClickHandler />
                </MapContainer>
            </div>

            <button onClick={handleFormSubmit}
                style={{
                    backgroundColor: 'blue',      // Background color
                    color: 'white',               // Text color
                    padding: '10px 20px',         // Padding
                    borderRadius: '5px',          // Border radius
                    border: 'none',               // Remove default border
                    cursor: 'pointer',            // Cursor style on hover
                    fontSize: '16px',             // Font size
                    fontWeight: 'bold',           // Font weight
                }}>
                Create Event
            </button>
        </div>
    );
};



export default Calender;
