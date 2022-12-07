import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--gray7);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #202024;
    background: var(--gray1);
    font-weight: 400;
    font-size: 1rem;
    color: var(--gray7);

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    font-weight: 600;
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--white);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.85);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'red' | 'green';
}

const colors = {
  green: '#00875F',
  red: '#F75A68'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #202024;
  border-radius: 0.25rem;
  background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : '#29292E'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray6);
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1rem;
    color: var(--gray6);
  }
`