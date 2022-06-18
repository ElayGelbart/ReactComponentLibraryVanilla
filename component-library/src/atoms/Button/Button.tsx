import React from 'react'
import styled from "styled-components"

const StyledButton = styled.button`
    background-color: #f5f5f5;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
    font-weight: bold;
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    &:hover {
        background-color: #e6e6e6;
        border-color: #adadad;
        color: #333;
        cursor: pointer;
        }
`

interface ButtonProps {
    text?:string,
    onClick?:()=>void
}

export function Button({text,onClick}: ButtonProps) {
  return (
    <StyledButton onClick={onClick}>{text?text:'Click Me'}</StyledButton>
  )
}