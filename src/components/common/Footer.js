import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterLink href="mailto:tejalbkale@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope /> tejalbkale@gmail.com
          </FooterLink>
          <FooterLink href="tel:+917517895436">
            <FaPhone /> +91 7517895436
          </FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Social</FooterTitle>
          <FooterLink href="https://www.linkedin.com/in/tejal-kale-1a00081b4/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </FooterLink>
          <FooterLink href="https://github.com/tejalkale" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterText>&copy; {new Date().getFullYear()} Tejal Kale. All rights reserved.</FooterText>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateX(3px);
  }
`;

const FooterBottom = styled.div`
  margin-top: 2rem;
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export default Footer;
