import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';




const Container = styled.div`
    height:60px;
    background-color:green;
    `;
const Wrapper = styled.div`
    background-color:blue;
    
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
     `;

const Left = styled.div`
    flex:1;
    background-color:red;
    display:flex;
    align-items:center
`;

const Right = styled.div`
    flex:1;
    background-color:yellowgreen`;
const Center = styled.div`
    flex:1;
    background-color:green;
    text-align:center`;

const SpanContainer = styled.span`
  background-color:yellowgreen;
  
`;


const SearchContainer = styled.div`
border:1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
cursor:pointer`;

const Input = styled.input`
background-color:yellow;
border:none`;

const Logo = styled.h1`
  font-weight: bold`;


const Navbar = () => {
  return (

    <Container>
      <Wrapper>
        <Left>
          <SpanContainer>Lor
          </SpanContainer>
          <SearchContainer>
            <Input />
            <FaSearch/>

          </SearchContainer>

        </Left>


        <Center><Logo>FaaizEcom</Logo></Center>
        <Right>Lorem ipsum dolor sit <FiShoppingCart/></Right>
      </Wrapper>

    </Container>

  )

}



export default Navbar
