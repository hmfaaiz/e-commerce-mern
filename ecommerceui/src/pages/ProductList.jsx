import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Footer from '../components/Footer';

import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom';
const Container = styled.div`
    
    `;

const Title = styled.h3`
    margin:20px;
    `;

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
   
  

    `;
const Filter = styled.div`
    margin:20px;
    ${mobile({ width: '0px 120px', flexDirection: 'column' })};
   
    `;
const FilterText = styled.span`
    margin-right:15px;
    font-size:18px;
    
    `;

const Select = styled.select`
    margin-right:10px;
    padding:3px;
    ${mobile({ width: '90px', marginTop: '10px' })};
    `;

const Option = styled.option`

    `;

function ProductList() {
    const location = useLocation();
    const cat = ("Location", location.pathname.split("/")[2]);
    const [filter, setFilter] = useState();
    const [sort, setSort] = useState("newest");

    const handleFilter = (e) => {

        const value = e.target.value

        setFilter({
            ...filter,
            [e.target.name]: value,
        });

    };
  

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products</FilterText>
                    <Select name="color" onChange={handleFilter}>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                        <Option>Black</Option>
                    </Select>
                    <Select name="zize" onChange={handleFilter}>
                        <Option disabled selected>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XS</Option>

                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select onChange={(e) => setSort(
                        e.target.value
                    )}>
                        <Option vaele="newest" selected>Newest</Option>
                        <Option vaele="desc">Price (desc)</Option>
                        <Option vaele="acc">Price (acc)</Option>


                    </Select>
                </Filter>

            </FilterContainer>
            <Products cat={cat} filter={filter} sort={sort}/>
            <Newsletter />
            <Footer />


        </Container>
    )
}

export default ProductList
