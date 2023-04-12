import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';




const Container = styled.div`
    height:60px;
    
    `;
const Wrapper = styled.div`
    /* background-color:blue; */
    
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
     `;

const Left = styled.div`
    flex:1;
   
    display:flex;
    align-items:center
`;

const Right = styled.div`
    flex:1;
   
    display:flex;
    justify-content:flex-end;
    align-items:center`;


const Center = styled.div`
    flex:1;
    
    text-align:center`;

const SpanContainer = styled.span`
 
  
`;


const SearchContainer = styled.div`
border:1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
cursor:pointer`;

const Input = styled.input`

border:none`;

const Logo = styled.h1`
  font-weight: bold`;


const MenuItem=styled.div`
  font-size:20px;
  margin-left:20px;

`



const Navbar = () => {
  return (

    <Container>
      <Wrapper>
        <Left>
          <SpanContainer>Lor
          </SpanContainer>
          <SearchContainer>
            <Input />
            <FaSearch color='gray' size={18}/>

          </SearchContainer>

        </Left>


        <Center><Logo>FaaizEcom</Logo></Center>
        <Right>
        <MenuItem>Register</MenuItem>
        <MenuItem>Sign in</MenuItem>
       
        <MenuItem><FiShoppingCart size={25}/></MenuItem>

        </Right>
        
      </Wrapper>

    </Container>

  )

}



export default Navbar
