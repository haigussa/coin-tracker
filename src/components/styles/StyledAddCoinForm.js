import styled from 'styled-components'

const StyledAddCoinForm = styled.div`
background-color: #1B2D45;
padding: 1.5rem 2rem;
max-width: 780px;
margin: auto;
box-sizing:border-box;
.type-selector select, form button{
     padding: 0.5rem 1rem;
     font-size:1.3rem;
     border-radius: 5px;
     border: 1px solid #999;
     margin: 1rem auto 2rem;
     transition: all 0.3s;
     background-color:#666;
     color:white;
     outline:none;
     &:hover{
         border: 1px solid #FDE24F;
         cursor: pointer;
     }
 }
 .input-container{
     margin: 0.5rem auto 1rem;
     max-width: 780px;
    display:flex;
    justify-content:space-between;
    box-sizing:border-box;
    @media(max-width: 750px){
        flex-direction:column;
        align-items: center;
        min-width: 100%;
        margin: 0;
        .input-name-container input{
            margin: 1rem auto;
        }
    }
    .input-name-container{
        flex-basis: 60%;
        input{
            box-sizing:border-box;
            min-width:100%;
            height: 1.5rem;
            border-radius: 6px;
            padding:1.2rem;
            font-size: 1.2rem;
            outline: none;
        }
    }
    .input-amount-container{
        input{
            box-sizing:border-box;
            height: 1.5rem;
            border-radius: 6px;
            padding:1.2rem;
            font-size: 1.2rem;
            outline:none;
        }
    }
 }

`

export default StyledAddCoinForm