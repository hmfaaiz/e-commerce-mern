import styled from 'styled-components'


const Container=styled.div`
    background-color:#008e6a;
    height:35px;
    font-size:20px;
    justify-content:center;
    align-items:center;
    display:flex;
    color:#e5e5e5;
   
   

`;

function Announcement() {
  return (
    <Container>
  Flash  Sales  25% off
    </Container>
  )
}

export default Announcement
