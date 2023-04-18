import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

import { mobile } from '../responsive'



const Container = styled.div`
    height:50px;

    ${mobile({ height: '32px' })};
    
    
    `;
const Wrapper = styled.div`
    
    padding:5px 20px;
    
    display:flex;
    justify-content:space-between;
  
    ${mobile({padding: '3px 0px' })};
    `;


const Left = styled.div`
    flex:1;
   
    display:flex;
    align-items:center;
   
    ${mobile({ justifyContent: 'center', flex: 2 })};`;


const Right = styled.div`
    flex:1;
   
    display:flex;
    justify-content:flex-end;
    align-items:center;
  
  
    ${mobile({ justifyContent: 'center', flex: 2 })};`;


const Center = styled.div`
    flex:1;
    
    text-align:center;`
  

const SpanContainer = styled.span`
  ${mobile({ display: `none` })};
 
`;


const SearchContainer = styled.div`
 
  border-radius:px;
  display:flex;
  align-items:center;
  margin-left:20px;

  padding:5px;
  background-color:rgb(0, 142, 106);;
  cursor:pointer;
  
  ${mobile({height:'13px' ,marginLeft: `0px` })};
  `;

const Input = styled.input`
  border:none;
  margin-Right: 7px;
  ${mobile({height:'15px', width: `90px` })}

 `;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '22px' })};
 `;


const MenuItem = styled.div`
  font-size:20px;
  margin-left:20px;
  ${mobile({ fontSize: '5px', marginLeft: '6px' })};
  

`;



const Navbar = () => {
  return (

    <Container>
      <Wrapper>
        <Left>
          <SpanContainer>Search
          </SpanContainer>
          <SearchContainer>
            <Input />
            <FaSearch color='white' size={18} />

          </SearchContainer>

        </Left>


        <Center><Logo>FEcom</Logo></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>

          <MenuItem><FiShoppingCart size={25} /></MenuItem>

        </Right>

      </Wrapper>

    </Container>

  )

}



export default Navbar
