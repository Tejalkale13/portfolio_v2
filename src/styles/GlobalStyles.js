import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    line-height: 1.6;
  }
  
  main {
    padding-top: 80px;
    min-height: calc(100vh - 80px);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.primaryDark};
    }
  }
  
  button {
    cursor: pointer;
  }
  
  /* Section styling */
  section {
    padding: 5rem 2rem;
    
    @media (max-width: 768px) {
      padding: 3rem 1.5rem;
    }
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
    text-align: center;
    color: ${({ theme }) => theme.text};
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background-color: ${({ theme }) => theme.primary};
      margin: 0.8rem auto 0;
      border-radius: 2px;
    }
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export default GlobalStyles;
