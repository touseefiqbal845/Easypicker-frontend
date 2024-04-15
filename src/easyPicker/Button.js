import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: 15rem;
  min-width: 11rem;
  min-height: 5rem;
  border-radius: 21px;
  margin-top: 2rem;
  background-color: black;
  color: ${({ theme }) => theme.colors.white};
  padding: 1.4rem 2.2rem;
  border-style: solid;
  border-width: 0.1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: black 0px 1px 4px;
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
