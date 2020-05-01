import styled from 'styled-components'

const StyledIncomeList = styled.ul`
    box-sizing:border-box;
    min-height: 60vh;
    padding: ${props =>
        props.containerType === "expense"
            ? "0 0 0 2px"
            : "0 2px 0 0"};
    border-left:${props =>
        props.containerType === "expense"
        && "1px solid #FDE24F"} ;

    @media(max-width: 780px){
       min-height: 100%;
    }
`
export const ListHeading = styled.div`
    h2{
        color:white;
        text-align:center;
        padding:1rem;
    }
    p{
        padding:1rem ;
        color: white;
        font-size:1.3rem;
        text-align: right;
}
`
export default StyledIncomeList