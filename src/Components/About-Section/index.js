import { Container, Card, CardImg, CardBody, CardText } from 'react-bootstrap'
import './index.css'
import ProfilePic from '../../assets/images/profile-pic.jpg'
import FullStack from '../../assets/images/FullStackBadge.png'
import BackEnd from '../../assets/images/BackendBadge.png'
import FrontEnd from '../../assets/images/FrontEndBadge.png'
import Foundations from '../../assets/images/JavaScriptFoundationsBadge.png'
const AboutSection = () => {
    
    return (
    <Container className='container-profile-pic'>
        <Card>
        <CardImg variant='top' src={ProfilePic}/>
        <CardBody>
            <CardText>This is another card</CardText>
        </CardBody>
        </Card>
    </Container>,
    
    <Container className='container-card'>
        <Card className='cards-badge'>
        <CardImg variant='top' src={FullStack}/>
        <CardBody>
            <CardText>This is another card</CardText>
        </CardBody>
        </Card>
        
        <Card className='cards-badge'>
        <CardImg variant='top' src={FrontEnd}/>
        <CardBody>
            <CardText>This is another card</CardText>
        </CardBody>
        </Card>
        
        <Card className='cards-badge'>
        <CardImg variant='top' src={BackEnd}/>
        <CardBody>
            <CardText>This is another card</CardText>
        </CardBody>
        </Card>
        
        <Card className='cards-badge'>
        <CardImg variant='top' src={Foundations}/>
        <CardBody>
            <CardText>This is another card</CardText>
        </CardBody>
        </Card>

    </Container>
    )
}
export default AboutSection