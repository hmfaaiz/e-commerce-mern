
import styled from 'styled-components'
import { VscTriangleLeft } from 'react-icons/vsc';
import { VscTriangleRight } from 'react-icons/vsc';




const Container = styled.div`
    height:100vh;
    width:100%;
    font-size:20px;
    color:#e5e5e5;
    position: relative;
    display:flex;
    overflow:hidden;
   
    

`;


const Arrow = styled.div`
    background-color:#8e1300;
    height:50px;
    width:50px;
    border-radius:50%;
    justify-content:center;
    align-items:center;
    display:flex;
    cursor: pointer;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin:auto;
    opacity:0.4;
    z-index:1;

`;


const Wrapper = styled.div`
   
    height:100%;
    display:flex; 
    /* transform:translateX(-1320px); */
    transform:translateX(-200vw)
    
`;

const Slide = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    align-items:center;
    background-color:${props=>props.bg}
`
const ImgContainer = styled.div`
    background-color:blue;
    height:100%;
    flex:1;
`;


const Image = styled.img`
height:80%;
    
`;
const DetailContainer = styled.div`
    flex:1;
    padding:50px;
`;

const Title = styled.h1`
font-size:60px;
`;

const Desc = styled.p`
    font-size:20px;
    font-weight:400;
    margin:20px 0;
    letter-spacing:7px
`;
const Button = styled.button`
    cursor: pointer;
    padding:7px;
    background-color:transparent;
    font-size:17px;`;



function Slider() {
    const handleclick=(props)=>{
    console.log("Click",props)
   

}

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleclick("left")}><VscTriangleLeft /></Arrow>
            <Wrapper>
                <Slide bg="#ff0000">
                    <ImgContainer>
                        <Image width="100%" src="https://www.shutterstock.com/image-photo/karachi-pakistan-may-01-2022-260nw-2153590639.jpg" alt="" />
                    </ImgContainer>

                    <DetailContainer>
                        <Title>Eid Collection</Title>
                        <Desc>Wash & Wear Suit For Men</Desc>
                        <Button>Show All</Button>

                    </DetailContainer>
                </Slide>
                <Slide bg="#f3be00">
                    <ImgContainer>
                        <Image width="100%" src="https://www.shutterstock.com/image-photo/karachi-pakistan-may-01-2022-260nw-2153590639.jpg" alt="" />
                    </ImgContainer>

                    <DetailContainer>
                        <Title>Summer  Collection</Title>
                        <Desc>Wash & Wear Suit For Men</Desc>
                        <Button>Show All</Button>

                    </DetailContainer>
                </Slide>
                <Slide bg="#07b4f9">
                    <ImgContainer>
                        <Image width="100%" src="https://www.shutterstock.com/image-photo/karachi-pakistan-may-01-2022-260nw-2153590639.jpg" alt="" />
                    </ImgContainer>

                    <DetailContainer>
                        <Title>Winter Collection</Title>
                        <Desc>Wash & Wear Suit For Men</Desc>
                        <Button>Show All</Button>

                    </DetailContainer>
                </Slide>
            </Wrapper>

            <Arrow direction="right" onClick={()=>handleclick("right")}><VscTriangleRight /></Arrow>

        </Container>
    )
}

export default Slider
