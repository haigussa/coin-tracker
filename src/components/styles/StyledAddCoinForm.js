import styled from 'styled-components'

const StyledAddCoinForm = styled.div`
background-color: #1B2D45;
padding: 1.5rem 2rem;
max-width: 780px;
margin:auto;
box-sizing:border-box;
.type-selector{
    color:red;
    margin-bottom: 1rem;
    select{
        font-size:1.5rem;
        background-color: #00214D;
        color: white;
        height: 2.5rem;
    }
}
 .input-container{
     margin: 1rem auto;
     max-width: 780px;
    display:flex;
    justify-content:space-between;
    box-sizing:border-box;
    @media(max-width: 750px){
        flex-direction:column;
        align-items: center;
        min-width: 100%;
        .input-name-container input{
            margin: 1rem auto;
        }
    }
    .input-name-container{
        flex-basis: 65%;
        input{
            box-sizing:border-box;
            min-width:100%;
            height: 1.5rem;
            border-radius: 6px;
            padding:1.2rem;
            font-size: 1.2rem;
        }
    }
    .input-amount-container{
        flex-basis:10%;
        input{
            box-sizing:border-box;
            height: 1.5rem;
            border-radius: 6px;
            padding:1.2rem;
            font-size: 1.2rem;
        }
    }
 }
 form button{
     padding: 0.5rem 1rem;
     font-size:1.3rem;
     border-radius:5px;
     margin: 1rem auto 2rem;
 }
`

export default StyledAddCoinForm