import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import p2 from '../images/p2.png';
import p5 from '../images/p5.png';

import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { mobile } from '../responsive'

const Container = styled.div`
   
    `;


const Wrapper = styled.div`
    padding:20px;
    ${mobile({padding:'5px'})};
   
    `;


const Title = styled.h2`
    align-items:center;
    justify-content:center;
    display:flex;
  
   
    `;
const Top = styled.div`
    align-items:center;
    justify-content:space-between;
    display:flex;
    padding:20px
   
    `;
const TopBotton = styled.button`
    padding:10px;

    cursor:pointer;
    color:white;
    cursor: pointer;
    background-color:${(props) => props.type === 'filled' ? 'black' : 'rgb(4, 151, 115)'};
    &:hover{
        background-color:${(props) => props.type === 'filled' ? 'rgb(149, 149, 149)' : 'rgb(2, 192, 144)'};
        
        color:white;
    };
    ${mobile({flexDirection:'column'})};

    `;

const TopTexts = styled.div`
    ${mobile({display:'none'})}; `;

const TopText = styled.span`
    text-decoration:underline;
    margin:10px;



    `;
const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px;
    ${mobile({flexDirection:'column'})};
   
    `;

const Info = styled.div`
   
    flex:3;


   
    `;


const Product = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:'column'})};


    `;

const Hr = styled.hr`
    background-color:#ececec;
    border:none;
    height:1px;
 
    `;

const ProductDetails = styled.div`
    flex:2;
    display:flex;

    `;
const ProductImage = styled.img`
    width:200px;
    height:200px;
    padding:10px;

    `;
const Detail = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    font-size:15px;

    `;
const ProductId = styled.span`

    `;
const ProductName = styled.span`

    `;
const ProductSize = styled.span`

    `;
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    cursor: pointer;
    background-color:${props => props.color};
    margin-left:5px;
    `;


const ProductPriceDetail = styled.div`
    flex:1;

    `;


const AddContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    
    width:50%;
    margin-top:40px;

    `;
const AmountContainer = styled.div`
    display:flex;
    cursor: pointer;
    align-items:center;
    margin-bottom:10px;
    `;
 

const Amount = styled.span`
    width:32px;
    height:32px;
    border:2px solid rgb(0, 142, 106);;
    border-radius:20px;
    align-items:center;
    display:flex;
    justify-content:center;
    margin:0px 13px;
    ${mobile({margin:'0px 20px'})};
    
`;

const ProductPrice = styled.div`
    
    padding:10px;
    font-size:30px;

 
    `;



const Summary = styled.div`
   
    flex:1;
    border-radius:10px;
    border:1px solid #dedede;
    padding:20px;
    height:55vh;
   
    `;


const SummaryTitle=styled.h2`
    font-weight:400;
    `;

const SummaryItem=styled.div`
    margin:20px 0px;
    display:flex;
    justify-content:space-between;
    `;

const SummaryItemText=styled.span`
    `;
const SummaryItemPrice=styled.span`
    `;
const Button=styled.button`
    width:100%;
    padding:10px;
    margin-top:40px;
    cursor:pointer;
    color:white;
    cursor: pointer;
    background-color:${(props) => props.type === 'filled' ? 'black' : 'rgb(4, 151, 115)'};
    &:hover{
        background-color:${(props) => props.type === 'filled' ? 'rgb(149, 149, 149)' : 'rgb(2, 192, 144)'};
        
        color:white;
    }
    `;


function Cart() {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>
                    Your Cart
                </Title>
                <Top>
                    <TopBotton>Continue Shopping</TopBotton>
                    <TopTexts>
                        <TopText>Shopping Bag(10)</TopText>
                        <TopText>Your Wishlist(2)</TopText>
                    </TopTexts>
                    <TopBotton type="filled">Checkout Now</TopBotton>

                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <ProductImage src={p2} />

                                <Detail>
                                    <ProductId><b>Id</b> 1</ProductId>
                                    <ProductName><b>Product</b> T shirt</ProductName>


                                    <ProductColor Color color="blue" />

                                    <ProductSize ><b>Size</b> Large</ProductSize>


                                </Detail>
                            </ProductDetails>
                            <ProductPriceDetail>
                                <AddContainer>
                                    <AmountContainer>
                                        <AiOutlineMinusCircle />
                                        <Amount> 10 </Amount>
                                        <AiOutlinePlusCircle />

                                    </AmountContainer>
                                    <ProductPrice>$ 25 </ProductPrice>
                                </AddContainer>
                            </ProductPriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <ProductImage src={p5} />

                                <Detail>
                                    <ProductId><b>Id</b> 1</ProductId>
                                    <ProductName><b>Product</b> T shirt</ProductName>


                                    <ProductColor Color color="#f8f8f8" />

                                    <ProductSize ><b>Size</b> Large</ProductSize>


                                </Detail>
                            </ProductDetails>
                            <ProductPriceDetail>
                                <AddContainer>
                                    <AmountContainer>
                                        <AiOutlineMinusCircle />
                                        <Amount> 10 </Amount>
                                        <AiOutlinePlusCircle />

                                    </AmountContainer>
                                    <ProductPrice>$ 25 </ProductPrice>
                                </AddContainer>
                            </ProductPriceDetail>
                        </Product>

                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Sub Total</SummaryItemText>
                            <SummaryItemPrice>$ 20</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimate Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 10</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ 1.25</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">Total</SummaryItemText>
                            <SummaryItemPrice>$ 30</SummaryItemPrice>
                        </SummaryItem>
                        <Button type="filled">Checkout Now</Button>

                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />

        </Container>
    )
}

export default Cart
