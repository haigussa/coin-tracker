import styled from 'styled-components'

const StyledIncomeExpenseItem = styled.li`
        box-sizing:border-box;
        list-style:none;
        background-color: #00EBC7;
        padding: 0.5rem 1rem ;
        margin: 0.5rem 0;
        color:#1B2D45;
        min-width: 100%;
        display:flex;
        justify-content: space-between;
        .item-container{
            width: 70%;
            display:flex;
            justify-content: space-between;
    }
    .edit-delete-btn{
        display:flex;
        justify-content:space-between;
        }
`

export default StyledIncomeExpenseItem