import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', Arial, sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    margin: 0;
    transition: background 0.4s, color 0.4s;
  }
  section {
    max-width: 750px;
    margin: 2rem auto;
    background: ${({ theme }) => theme.card};
    padding: 1.5rem 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(30,50,100,0.08);
    transition: background 0.4s;
  }
  h2 {
    color: ${({ theme }) => theme.accent};
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 0.3rem;
    margin-bottom: 1rem;
  }
  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: underline;
  }
  .surprise {
    max-width: 450px;
    margin: 1.5rem auto;
    background: #22232a;
    color: #ffd700;
    padding: 1.2rem;
    border-radius: 16px;
    font-size: 1.2rem;
    text-align: center;
    box-shadow: 0 2px 12px rgba(247,180,44,0.13);
    animation: pop 1s ease;
  }
  @keyframes pop {
    0% { transform: scale(0.5); opacity: 0; }
    80% { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(1); }
  }
  @media (max-width: 600px) {
    section {
      padding: 1rem;
      max-width: 95vw;
    }
  }
`;

export default GlobalStyle;
