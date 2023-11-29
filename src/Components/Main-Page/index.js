import './index.css'
import "leaflet/dist/leaflet.css"
import { Container, Card, CardBody, CardText, CardImg } from "react-bootstrap";
import { MapContainer, TileLayer, Marker,Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import ProfilePic from '../../assets/images/profile-pic.jpg'
import {Icon} from 'leaflet'

const MainPage = () => {
    return (  
        <Container className="home-container-all">
        <h1>Welcome To My Portfolio!</h1>
        <div className='card-profile-pic'>
        <img id='selfie' src={ProfilePic}></img>
        <h3 className='text-hello-1'>Hello, I'm Matthew Baum. <br></br> 
        As you peruse this portfolio, you'll discover a comprehensive showcase of my technological expertise. 
        Feel free to explore and, if you have any inquiries, I welcome you to reach out. Thank you for taking the time 
        to explore my portfolio; your interest is truly appreciated.</h3>
        </div> 
     <div className='map-container'>
       <h3 className='text-hello-2'>I have lived in Middle Tennessee most of my life.<br></br>
       I was raised in Franklin, went to college in Cookeville at Tennessee Technological University, and now I live in Columbia!
       <br></br> <br></br>Manipulate the map to find all 3!</h3>
       <MapContainer className="leaflet-map" center={[35.615, -87.035]} zoom={9} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.615, -87.035]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup>
          This is the city I live in!
        </Popup>
      </Marker>
      <Marker position={[35.920, -86.868]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup>
          This is where I grew up!
        </Popup>
      </Marker>
      <Marker position={[36.175, -85.509]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup>
          This is where I went to college!
        </Popup>
      </Marker>
    </MapContainer> 
     </div>
        
    </Container>
    )
}

export default MainPage