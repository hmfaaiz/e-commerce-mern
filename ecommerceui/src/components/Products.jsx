import React from 'react'
import { ProductsData } from '../data'
import styled from 'styled-components'
import Product from './Product'


const Container = styled.div`

 
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  padding:20px;

 

`;

function Products() {
    return (
        <Container>

            {ProductsData.map((item) => (
                <Product item={item} />


            ))}

        </Container>
    )
}

export default Products
