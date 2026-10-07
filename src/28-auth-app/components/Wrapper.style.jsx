import styled, { keyframes } from "styled-components";

const shake = keyframes`
    0% { transform: translate(1px, 1px) rotate(0); }
    10% { transform: translate(-1px,-2px) rotate(0); }
    20% { transform: translate(-3px, 0px) rotate(0); }
    30% { transform: translate( 3px, 2px) rotate(0); }
    40% { transform: translate( 1px,-1px) rotate(0); }
    50% { transform: translate(-1px, 2px) rotate(0); }
    60% { transform: translate(-3px, 1px) rotate(0); }
    70% { transform: translate(3px,  1px) rotate(0); }
    80% { transform: translate(-1px,-1px) rotate(0); }
    90% { transform: translate(1px,  2px) rotate(0); }
    100% { transform: translate(1px,-2px) rotate(0); }  
`;

export const Wrapper = styled.div`
    &.active {
        animation: ${shake} 0.5s ease-out;
        input {
            color:red;
            &::placeholder {
                color: red;
            }
        }    
        &.hide {
            display:none;
        }
    }
`;