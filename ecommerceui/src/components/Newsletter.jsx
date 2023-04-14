import styled from 'styled-components';
import { IoSend} from 'react-icons/io5';



const Container = styled.div`
    height:50vh;
    background-color:rgb(75, 207, 174);
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

`;
const Title = styled.h1`
    margin-bottom:20px;
    font-size:50px`;



const Description = styled.div`
    margin-bottom:20px;
    color:#000000`;

const InputContainer = styled.div`
    background-color:white;
    height:35px;
    width:50%;
    justify-content:space-between;
    display:flex`;

const Input = styled.input`
    border:none;
    padding-left:20px;
    width:45vw`;
    
const Button = styled.button`
    background-color:rgb(5, 157, 119);
    cursor:pointer;
    border:none;
    width:2.4vw`;

   

function Newsletter() {
    return (
        <Container>
            <Title>NEWSLETTER</Title>
            <Description>Sale is started. Get Flat 10% OFF on New Arrivals and shop your desired Eid clothing at discounted price. Limited time offer.</Description>
            <InputContainer>
                <Input placeholder='faaizazeem@gmail.com' />
                <Button>
                    <IoSend />

                </Button>


            </InputContainer>
        </Container>
    )
}

export default Newsletter
