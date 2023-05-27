import styled from "styled-components";

export const Button = styled.button`
      padding: 1rem 3rem;
      border-radius: 1rem;
      font-size: 1rem;
      font-weight: 700;
      background-color: ${(props)=> props.theme.color};
      border: 1px solid ${(props)=> props.theme.background};
      color: ${(props)=> props.theme.background};
      transition: all .2s linear;
      cursor: pointer;
    &:hover{
      background-color: ${(props)=> props.theme.background};
      color: ${(props)=> props.theme.color};
      border: 1px solid ${(props)=> props.theme.color};
    }
`