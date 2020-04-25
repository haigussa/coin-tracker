import styled from 'styled-components'

const StyledMain = styled.main`
display: flex;
justify-content:center;
margin: 1rem auto;
max-width: 780px;
background-color: #1B2D45;
@media (max-width: 768px) {
    flex-direction: column;
    
}

.income-wrapper, .expense-wrapper{
    width: 100%;
    text-align: left;
}
`

export default StyledMain;