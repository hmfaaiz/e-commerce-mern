import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import p1 from '../images/p1.png'

import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineMinusCircle } from 'react-icons/ai'

import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom';
import { publicRequest, userRequest } from '../requestMethod';

import {useDispatch} from "react-redux";
import {addProduct} from "../redux/cartRedux";

const Container = styled.div``;

const Wrapper = styled.div`
    display:flex;
    padding:50px;
    ${mobile({ padding: '5px', flexDirection: 'column' })};
    `;

const ImageContainer = styled.div`

    flex:1;
    padding:0px 50px;
    ${mobile({ padding: '15px', flexDirection: 'column' })};
    `;



const Image = styled.img`
    width:100%;
    object-fit:cover;
    height:90vh;
    
    
    `;

const InfoContainer = styled.div`
    flex:1;
    padding:20px;
    ${mobile({ padding: '10px' })};
    
    `;

const Title = styled.h2`
    font-weight:400;
    `;

const Description = styled.p`
    margin:25px 0px;
    `;


const Price = styled.span`
    font-size:40px;
    font-weight:120;`;

const FilterContainer = styled.div`
    display:flex;
    width:50%;
    justify-content:space-between;
    ${mobile({ width: '100%' })};
    `;



const Filter = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:20px;
   `;



const FilterTitle = styled.h4`
    font-weight:400;
    
        `;
const FilterColor = styled.div`
    width:25px;
    height:25px;
    border-radius:50%;
    cursor: pointer;
    background-color:${props => props.color};
    margin-left:5px;
    `;


const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
    
    `;

const FilterOption = styled.option`
`;



const AddContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    
    width:50%;
    margin-top:40px;
    ${mobile({ width: '100%' })};

    `;
const AmountContainer = styled.div`
    display:flex;
    cursor: pointer;
    align-items:center;`;

const Amount = styled.span`
    width:32px;
    height:32px;
    border:2px solid rgb(0, 142, 106);;
    border-radius:20px;
    align-items:center;
    display:flex;
    justify-content:center;
    margin:0px 8px;`;

const Button = styled.button`
    background-color:white;
    padding:12px;
    cursor:pointer;
    border-radius:15px;
    border:2px solid rgb(0, 142, 106);

    &:hover{
        background-color:rgb(2, 192, 144);
        color:white;
    }`;

function Product() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const dispatch=useDispatch();

    const handleQuantity = (type) => {
        if (type === "acc") {
            setQuantity(quantity + 1)

        }
        else {
            if (quantity > 1) {
                setQuantity(quantity - 1)

            }

        }
    }

    const handleClick=()=>{
      
        dispatch(addProduct({...product,quantity,color,size,price:product.price*quantity}));
        console.log("data:")
        
    }


    useEffect(() => {
        const getProduct = async () => {
            try {

                const res = await publicRequest.get("/product/find/" + id);

                setProduct(res.data.product);
                setLoading(true)

            }

            catch
            (err) {
             
                console.log(err);
            }
        };
        getProduct()
    }, [id]);




    return (
        <Container>



            <Announcement />
            <Navbar />

            {loading? (
                <Wrapper >

                    <ImageContainer>
                        <Image src={product.img} />
                    </ImageContainer>

                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Description>{product.desc} Lorem ipsum dolor ibus ipsam.</Description>
                        <Price>$ {product.price}</Price>

                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                {product.color?.map((c) => {
                                    return <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                                })}


                            </Filter>

                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize onChange={(e)=>setSize(e.target.value)}>
                                    {product.size?.map((s) => {

                                        return <FilterOption key={s}> {s} </FilterOption>
                                    })}


                                </FilterSize>
                            </Filter>
                        </FilterContainer>

                        <AddContainer>
                            <AmountContainer>
                                <AiOutlineMinusCircle onClick={() => handleQuantity("desc")} />
                                <Amount> {quantity} </Amount>
                                <AiOutlinePlusCircle onClick={() => handleQuantity("acc")} />

                            </AmountContainer>
                            <Button onClick={()=>handleClick()}>Add to Cart</Button>
                        </AddContainer>
                    </InfoContainer>

                </Wrapper>
            ):
            (<p>Loading</p>)
            }
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default Product
