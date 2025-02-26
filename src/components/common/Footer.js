import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterLink href="mailto:prasadsb240801@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope /> prasadsb240801@gmail.com
          </FooterLink>
          <FooterLink href="tel:+918956197361">
            <FaPhone /> +91 8956197361
          </FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Social</FooterTitle>
          <FooterLink href="https://linkedin.com/in/prasad24" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </FooterLink>
          <FooterLink href="https://github.com/Prasad-b-git" target="_blank" rel="noopener noreferrer">
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
        <FooterText>&copy; {new Date().getFullYear()} Prasad Bandagale. All rights reserved.</FooterText>
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
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const FooterBottom = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export default Footer;
