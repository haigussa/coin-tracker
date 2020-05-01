import styled from 'styled-components'

const StyledBalance = styled.div`
background-color: #1B2D45;
max-width: 780px;
margin: 0 auto;
padding:1rem 0;
color: whitesmoke;
h2{
    margin-top:0;
    .balance-amount{
        background-color: ${props =>props.balanceStat > 0 ? "#00A48B": "#FF5470" } ;
        padding: 0.7rem;
        border-radius: 10px;
    }
}
.balance-wrapper{
max-width: 500px;
height: 50px;
margin: 1rem auto;
background-color:#00A48B;
color:white;
border: 5px solid #00214D;
border-radius: 10px;
position: relative;
border-radius: 30px;
.balance{
    position:absolute;
    background-color: #FF5470;
    border-radius: 30px ;
    height:100%;
    max-width:100%;
    animation: progressBar 2s ease-out;
    width: ${props =>
        props.spentIndicator}%;
       }
}
    @keyframes progressBar {
       0%{
           width: 0%;
       } 
       100%{
           width: ${props =>
        props.spentIndicator}%;
        
       }
    }
`
export default StyledBalance;