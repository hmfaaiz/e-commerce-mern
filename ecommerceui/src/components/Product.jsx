import React from 'react'
import styled from 'styled-components'
import { FiShoppingCart } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';


const Info = styled.div`
    background-color:rgba(0,0,0,0.1);
    opacity:0;
    position:absolute;
    height:100%;
    width:100%;
    z-index:2;
    display:flex;
    align-items:center;
    justify-content:center;
    
    transition:all 0.8s ease;
`;



const Container = styled.div`
   background-color:#fbfbfb;
    display:flex;
    align-items:center;
    justify-content:center; 
    flex:1; 
    margin:5px;
    min-width: 200px;
    height:350px;
    position: relative;

    &:hover ${Info}{
        opacity:1;
    };

   

`;

const Circle = styled.div`
    height:200px;
    width:200px;
    border-radius:50%;
    background-color:#f8d8ff;
    position:absolute;
    
`;


const Icon = styled.div`
    width:40px;
    background-color:white;
   
    height:40px;
    border-radius:50%;
    align-items:center;
    justify-content:center;
    display:flex;
    margin:5px;
    cursor: pointer;
    transition:all 0.5s ease;

    &:hover{
        background-color:#008e6a;;
        transform:scale(1.3);
    }
    
`;

const Image = styled.img`
    height:75%;
    width:90%;
    z-index:1;
   
   

    
`;

function Product(props) {
    return (
        <Container>
         
            <Circle />
            <Image src={props.item.img} />
          
       
            <Info>
                <Icon>
                    <FiShoppingCart />

                </Icon>
                <Icon>
                    <FiHeart />

                </Icon>

                <Icon>

                    <AiOutlineSearch/>

                </Icon>


            </Info>

   
        </Container>

    )
}

export default Product
