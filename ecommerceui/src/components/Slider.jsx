
import styled from 'styled-components'
import { VscTriangleLeft } from 'react-icons/vsc';
import { VscTriangleRight } from 'react-icons/vsc';
import { useState } from 'react';

import { SliderItems } from '../data';


const Container = styled.div`
    height:100vh;
    width:100%;
    font-size:20px;
    color:black;
    position: relative;
    display:flex;
    overflow:hidden;
   
    

`;


const Arrow = styled.div`
   
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
    /* transform:translateX(${props => props.pointer*-100}vw);
    transition:all 0.5s ease; */
    
`;

const Slide = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    align-items:center;
    background-color:${props => props.bg}
`
const ImgContainer = styled.div`
   
    height:100%;
    flex:1;
    background-color: transparent;
`;


const Image = styled.img`
height:100%;
    
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
    font-size:17px;
   
    `;



    let pointer = 0;
function Slider() {

    const [data, setdata] = useState(SliderItems[pointer]);

    const handleclick = (props) => {

        

        console.log("Click", props, data.id)
        if (props === 'right') {
            if (pointer<(SliderItems.length-1)){
                pointer += 1;
            }
            else{
                pointer=0;
            };
            

        }
        else {
            if (pointer>0){
                pointer -= 1;
            }
            else{
                pointer=SliderItems.length-1;
            };
            
        }
        console.log(pointer);
        setdata(SliderItems[pointer])





    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleclick("left")}><VscTriangleLeft /></Arrow>
            <Wrapper pointer={pointer}>
                <Slide bg={data.bg}>
                    <ImgContainer>
                        <Image width="100%" src={data.image} alt="" />
                    </ImgContainer>

                    <DetailContainer>
                        <Title>{data.title}</Title>
                        <Desc>{data.desc}</Desc>
                        <Button>Show All</Button>

                    </DetailContainer>
                </Slide>
            </Wrapper>

            <Arrow direction="right" onClick={() => handleclick("right")}><VscTriangleRight /></Arrow>

        </Container>
    )
}

export default Slider
