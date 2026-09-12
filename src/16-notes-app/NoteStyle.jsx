// import React from 'react'
import styled from 'styled-components';


export const NoteStyle = styled.div `
  color:red;
  background: green;
`;

export const Icons = styled.span`
  display:flex;
  justify-content:space-between;
  font-size: 1.5rem;
  cursor:pointer;
  margin-right:0.3rem

`;

export const DeletedIcon = styled.span `
  &:hover {
    color:red;
  }
  transition: all 0.23 ease;
`;





/* export default function noteStyle() {
  return (
    <div>
      
    </div>
  )
} */
