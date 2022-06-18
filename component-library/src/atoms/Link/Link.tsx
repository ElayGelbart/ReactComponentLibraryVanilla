import React from 'react'
import styled from "styled-components"

interface linkProps {
    text?:string
    href?:string
    color:string
}

const StyledLink = styled.a<linkProps>`
    color: ${()=>props=>props.color||'#333'};
    font-size: 14px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    line-height: 36px;
    padding: 0 16px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    width: 100%;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
        }
`

export function Link({text,href,color}: linkProps) {
  return (
    <StyledLink href={href} color={color} target="_blank">{text?text:'Link to anything'}</StyledLink>
  )
}