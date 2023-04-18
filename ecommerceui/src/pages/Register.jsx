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
    width:45%;
    background-color:white;
    padding:20px  ;
    ${mobile({ width:'70vw',marginRight:'2%'})};

    `;
const Form=styled.form`
    display:flex;
    flex-wrap:wrap;

    `;
const Input=styled.input`
    flex:1;
    margin:10px;
    padding:10px;


    `;
const Agreement=styled.p`
    font-size:10px;
    margin:10px;



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


function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder="first name"></Input>
                <Input placeholder="last name"></Input>
                <Input placeholder="email"></Input>
                <Input placeholder="username"></Input>
                <Input placeholder="password"></Input>
                <Input placeholder="confirm password"></Input>
                <Agreement>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quo non repudiandae veniam eligendi vel, illum necessitatibus
                      possimus velit ducimus mollitia numquam explicabo sint aperiam
                       porro dolor harum autem amet quas!</Agreement>

                <Button>Create account</Button>
            </Form>

        </Wrapper>


    </Container>
  )
}

export default Register
