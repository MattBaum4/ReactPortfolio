import './index.css'
import {Container} from "react-bootstrap"
import Zork from "../../assets/images/ZorkingtonScreenshot1.png"
import Creek from "../../assets/images/CreekVT.png"
const ExperienceSection = () => {
    return (
        <Container className='entire-xp-page'>

            <h1 className='xp-titles'>CreekVT</h1>            
            <div className='creek-container'>
                <h3 className='creek-txt'>
                My most significant piece of experience is from CreekVT, a whitewater raft racing organization, 
                where myself and a small group of developers created a full stack addition to the existing site.
                Our addition allowed for admin functionality, an organized photo gallery sortable by year and specific race,
                account and race registration, secure payment processing, and much more.
                </h3>
                <img
                src={Creek}
                className='creek-img'
                >
                </img>
            </div>


                <h1 className='xp-titles'>Zorkington</h1>
            <div className='zork-container'>
                <img 
                src={Zork}
                className='zork-img'
                >
                
                </img>

                <h3 className='zork-txt'>
                    One of my favorite projects I have completed was a World of Warcraft version of Zork; a console based
                    text game. I implemented navigation by typing which direction you'd like to travel, an inventory system, and 
                    multiple interactions dependant on the items in your inventory. 
                </h3>
            </div>

            <div className='port-container'>
                <h1 className='xp-titles'>More</h1>
                <h3 className='port-txt'>This portfolio is my most recent project, where I can showcase the badges I've earned, the technical skills
                    I have, as well as a live demo of some of the dependencies I know. For all of my other projects, 
                    the full code can be found on my Github (Linked on the navigation bar). 
                </h3>

            </div>
            
            
        </Container>
    )
    
}
export default ExperienceSection