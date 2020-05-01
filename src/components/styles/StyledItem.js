import styled from 'styled-components'

const StyledItem = styled.li`
        background-color: ${props =>
                props.inputType === "incomeRow" ? "#00A48B"  : "#FF5470"
        };
        box-sizing:border-box;
        list-style:none;
        padding: 0.5rem 1rem ;
        margin: 0.5rem 0;
        color:#E5E5E5;
        font-size:1.2rem;
        min-width: 100%;
        display:flex;
        justify-content: space-between;
        align-items:center;
        .item-container{
            width: 70%;
            display:flex;
            justify-content: space-between;
    }
    .fa-btn{
        display:flex;
        justify-content:space-between;
        button{
                padding: 5px;
                margin: 3px;
                background-color: transparent;
                border:none;
                font-size: 1rem;
                color:#00214D;
                align-self:center;
                border-radius: 5px;
                height: 100%;
                width: 100%;
                transition: all 0.4s;
                &:hover{
                        cursor: pointer;
                        color: white;
                        background-color: #00214D;
                }
        }
 }
 input{
         /* background-color: #FFCBD4; */
         border: none;
         height: 2rem;
         padding: 0 5px;
         border-radius: 6px;
       
 }
`

export default StyledItem