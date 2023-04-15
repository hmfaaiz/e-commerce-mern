import styled from "styled-components"
import { FiFacebook } from "react-icons/fi"
import { BsWhatsapp } from "react-icons/bs"
import { TfiTwitter } from "react-icons/tfi"
import { BsInstagram } from "react-icons/bs"
import { FaMapMarkerAlt } from "react-icons/fa"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import payment from '../images/payment.png';

const Container = styled.div`
    display:flex;
    padding:20px;
    `;

const Left = styled.div`
    flex:1`;

const Logo = styled.h1`
    font-size:30px;
    cursor:pointer;
    `;
const Description = styled.p`
    margin-top:12px;
    margin-right:50px;
    font-size:15px;
    `;


const IconContainer = styled.div`
    display:flex;
    margin-top:12px;
    `;
const Icon = styled.div`
    background-color:${props => props.bg};
    margin-right:10px;
    height:35px;
    width:35px;
    align-items:center;
    justify-content:center;
    display:flex;
    border-radius:50%;
    color:white;
    cursor:pointer;`;
    

const Center = styled.div`
flex:1`;

const Title = styled.h3`
    margin-bottom:20px
    
`;

const List = styled.ul`

    margin:0px;
    padding:0;
    display:flex;
    
    flex-wrap:wrap;
    `;
const ListItem = styled.li`
   
    list-style:none;
    font-size:15px;
    margin-bottom:9px;
    width:50%;
    cursor:pointer;
    
`;



const Right = styled.div`
flex:1;

`;



const ContactContainer = styled.div`
    margin-bottom:10px;
    font-size:15px;
`;

const Payment = styled.img`
    width:40%;
    margin-top:4px;
    cursor:pointer;
 
    `;

function Footer() {

    return (
        <Container>
            <Left>
                <Logo>
                    FaaizEcom
                </Logo>
                <Description>
                    Lorem ipsum dolor sit amet, consec tetur adipi sicing .
                    Voluptate voluptate dolorquasi, perspi ciatis quod non
                    animi officia, quibusdam dolore vel at dolores deleniti
                    quae dicta.Dolores ipsum dolor sit voluptate amet.
                </Description>
                <IconContainer>
                    <Icon bg="#500bff">
                        <FiFacebook />
                    </Icon>
                    <Icon bg="#11ff00">
                        <BsWhatsapp />

                    </Icon>
                    <Icon bg="#0ba6ff">
                        <TfiTwitter />
                    </Icon>
                    <Icon bg="#ff0b71">
                        <BsInstagram />

                    </Icon>
                </IconContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Order tracking</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Whishlist</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Terms</ListItem>

                </List>
            </Center>
            <Right>
                <Title>Contact</Title>

                <ContactContainer>
                    <FaMapMarkerAlt style={{ marginRight: "15px" }} />
                    Karachi Pakistan
                </ContactContainer>
                <ContactContainer>
                    <BsFillTelephoneFill style={{ marginRight: "15px" }} />
                    +92 0303030303
                </ContactContainer>
                <ContactContainer>
                    <MdEmail style={{ marginRight: "15px" }} />
                    faaizazeem@gmail.com
                </ContactContainer>

                <Payment src={payment} />



            </Right>

        </Container>
    )
}

export default Footer
