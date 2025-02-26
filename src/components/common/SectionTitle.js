// src/components/common/SectionTitle.js
import styled from 'styled-components';

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 2rem;
`;

export default SectionTitle;
