import React from 'react'
import styled from "styled-components"
import { mobile } from '../responsive'


const Container = styled.div`
    flex:1;
    margin:6px;
    /* background-color:${props => props.bg}; */
    height:100vh;
    position:relative;
    


`;
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    ${mobile({height:'25vh'})};

`;
const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    

`;
const Title = styled.h1`
    
    color:#ecd56f ;
   
;

`;
const Button = styled.button`
    color:white;
    background-color:#008e6a;
    padding:7px;
    border:none;
    font-weight:400;
    border-radius:10px;
    margin-top:10px;

`;
function CategoriesItem(props) {
    return (
        <Container bg={props.item.bg}>

            <Image src={props.item.image} alt="" />


            <Info>
                <Title>{props.item.title}</Title>

                <Button>Shop Now</Button>
            </Info>

        </Container>
    )
}

export default CategoriesItem
