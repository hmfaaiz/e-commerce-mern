import React from 'react'
import styled from "styled-components"
import CategoriesItem from './CategoriesItem';
import { CategoriesData } from '../data';
const Container=styled.div`
    /* margin-top:20px; */
 
    display:flex;
    justify-content:space-between;
    padding:20px;
    
    
`;

function Categories() {
  return (
    <Container>
        {CategoriesData.map((item)=>(
            <CategoriesItem item={item}/>


        ))}
      
        
    </Container>

  )
}

export default Categories
