import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container=styled.div`
    width: 100vw;
    height:100vh;
    background: linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.2)) ,url("https://img.freepik.com/free-photo/girl-holds-fashion-shopping-bag-beauty_1150-13673.jpg") center;
    display:flex;
    align-items:center;
    justify-content:center;
    
    `;
const Title=styled.h2`
    font-size:30px;
    font-weight:100;
    
    `;
const Wrapper=styled.div`
    width:20%;
    background-color:white;
    padding:20px  ;
    ${mobile({ width:'60%'})};

    `;
const Form=styled.form`
    display:flex;
    flex-direction:column;

    `;
const Input=styled.input`
    flex:1;
    margin:10px;
    padding:10px;


    `;

const Button=styled.button`
    padding:10px 15px;
    border:none;
    margin:10px;
    background-color:rgb(4, 151, 115);
    color:white;
    cursor: pointer;

    &:hover{
        background-color:rgb(2, 192, 144);
        color:white;
    }

    `;

const Link=styled.a`
    text-decoration:underline ;
    margin:5px 0px 0px 10px;
    cursor: pointer;
    font-size:10px;
    color:#02ab70;

         `;


function Login() {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                
                <Input placeholder="username"></Input>
                <Input placeholder="password"></Input>
             
                <Button>Login</Button>

                <Link>Forget Password?</Link>
            <Link>Register</Link>
            </Form>
            

        </Wrapper>


    </Container>
  )
}

export default Login
