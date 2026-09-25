import styled from "styled-components";

const animateExpenseStyle = keyframes`
    0% {transform:translateY(-100px)}
    100%{transform:translateY(0)}
`;

export const ExpensesItemStyle = styled.li`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    border-bottom: 1px solid;
    box-shadow: 5px 5px 1px rgba(0,0,0,0.2);
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius:5px;
    transition:all .3 ease;
    &.expense-details{
        width:70%;
        display:grid;
        grid-template-columns: 4fr 1fr 1fr;
        align-items:center;
    }
    &:hover {
        cursor:pointer;
        box-shadow:none;
    }
    &.edit {
        color: lightrgray;
    }
    animation: ${animateExpenseStyle} 0.2s linear;
`;