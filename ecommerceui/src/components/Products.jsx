import React,{ useEffect, useState }  from 'react'
import { ProductsData } from '../data'
import styled from 'styled-components'
import Product from './Product'
import axios from 'axios';

const Container = styled.div`

 
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  padding:20px;

 

`;

function Products({cat,filter,sort}) {
    const [products,setProducts]=useState([]);
    const [filterproducts,setFilterProducts]=useState([]);

    useEffect(()=>{
        
        const getproduct=async()=>{
            
            try{
                const res=await axios.get(cat? `http://localhost:9000/api/product/?category=${cat}`:
                `http://localhost:9000/api/product/`);
                setProducts(res.data);
                console.log("products",products)

            }
            catch(err){
                console.log("err",err)
            }
        };
        getproduct();

        // [cat] it tell react to run only when category change
    },[cat])


    return (
        <Container>
            

            {ProductsData.map((item) => (
                <Product item={item} />


            ))}
     
        </Container >
    )
}

export default Products
