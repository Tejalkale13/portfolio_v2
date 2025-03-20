import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <ContactContainer>
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>Contact Me</PageTitle>
          <PageDescription>
            Feel free to reach out to me via email, phone, or social media. I'm always open to new opportunities and collaborations.
          </PageDescription>
        </motion.div>
      </PageHeader>
      <ContactInfo>
        <ContactItem>
          <ContactIcon as={FaEnvelope} />
          <ContactDetail>
            <ContactLabel>Email</ContactLabel>
            <ContactValue>tejalbkale@gmail.com</ContactValue>
          </ContactDetail>
        </ContactItem>
        <ContactItem>
          <ContactIcon as={FaPhone} />
          <ContactDetail>
            <ContactLabel>Phone</ContactLabel>
            <ContactValue>+91 7517895436</ContactValue>
          </ContactDetail>
        </ContactItem>
        <ContactItem>
          <ContactIcon as={FaLinkedin} />
          <ContactDetail>
            <ContactLabel>LinkedIn</ContactLabel>
            <ContactValue>
              <a href="https://www.linkedin.com/in/tejal-kale-1a00081b4/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/tejal-kale-1a00081b4
              </a>
            </ContactValue>
          </ContactDetail>
        </ContactItem>
        <ContactItem>
          <ContactIcon as={FaMapMarkerAlt} />
          <ContactDetail>
            <ContactLabel>Address</ContactLabel>
            <ContactValue>A 1805, Sai Paradise, Punawale - 411033</ContactValue>
          </ContactDetail>
        </ContactItem>
      </ContactInfo>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.background};
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 800px;
  margin: 0 auto;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContactIcon = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
`;

const ContactDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;

const ContactValue = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export default ContactPage;
