import React from 'react';
import styled from 'styled-components';

const ToggleBtn = styled.button`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.accent};
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  margin: 1rem auto;
  display: block;
  transition: background 0.5s, color 0.5s;
  box-shadow: 0 2px 8px rgba(30,50,100,0.08);

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.card};
    transform: scale(1.08) rotate(-2deg);
  }
`;

const ThemeToggle = ({ toggleTheme, theme }) => (
  <ToggleBtn onClick={toggleTheme}>
    {theme === 'light' ? 'Go Dark' : theme === 'dark' ? 'Go Space 🚀' : 'Go Light'}
  </ToggleBtn>
);

export default ThemeToggle;
