import React, { useEffect, useState } from 'react'
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

function Products({ cat, filters, sort }) {
    const [products, setProducts] = useState([]);
    const [filterproducts, setFilterProducts] = useState([]);

    useEffect(() => {

        const getproduct = async () => {

            try {
                const res = await axios.get(cat ? `http://localhost:9000/api/product/?category=${cat}` :
                    `http://localhost:9000/api/product/`);
                setProducts(res.data);
                console.log("products", products, res.data)

            }
            catch (err) {
                console.log("err", err)
            }
        };
        getproduct();

        // [cat] it tell react to run only when category change
    }, [cat]);

    useEffect(() => {

        if (filters) {
            console.log("check", cat, filters)

            cat && setFilterProducts(

                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value))));

        }
        else {
            cat && setFilterProducts(
                products)
        }

    }, [products, cat, filters]);

    useEffect(() => {

        if (sort === "newest") {
            setFilterProducts((prev) =>

                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        }
        else if (sort === "asc") {
            setFilterProducts((prev) =>

                [...prev].sort((a, b) => a.price - b.price)
            );
        }
        else {
            setFilterProducts((prev) =>

                [...prev].sort((a, b) => b.price - a.price)
            );
        }

    }, [sort]);

    return (
        <Container>


            {cat ? filterproducts.map((item) =><Product item={item} />)
             : products.slice(0,2).map((item) =><Product item={item} />)}

        </Container >
    )
}

export default Products
