import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <BlogContainer>
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>Blog</PageTitle>
          <PageDescription>
            Welcome to my blog! Here, I share my insights, experiences, and knowledge on various topics related to DevOps, cloud computing, and technology.
          </PageDescription>
        </motion.div>
      </PageHeader>
      <BlogContent>
        <BlogPost>
          <BlogPostTitle>Getting Started with Kubernetes</BlogPostTitle>
          <BlogPostDate>February 20, 2025</BlogPostDate>
          <BlogPostDescription>
            In this post, I'll walk you through the basics of Kubernetes, including setting up a cluster, deploying applications, and managing resources.
          </BlogPostDescription>
          <BlogPostLink to="/blog/getting-started-with-kubernetes">Read More</BlogPostLink>
        </BlogPost>
        <BlogPost>
          <BlogPostTitle>CI/CD with Jenkins and Docker</BlogPostTitle>
          <BlogPostDate>February 15, 2025</BlogPostDate>
          <BlogPostDescription>
            Learn how to set up a CI/CD pipeline using Jenkins and Docker for automated testing and deployment of your applications.
          </BlogPostDescription>
          <BlogPostLink to="/blog/ci-cd-with-jenkins-and-docker">Read More</BlogPostLink>
        </BlogPost>
        <BlogPost>
          <BlogPostTitle>Infrastructure as Code with Terraform</BlogPostTitle>
          <BlogPostDate>February 10, 2025</BlogPostDate>
          <BlogPostDescription>
            A comprehensive guide on using Terraform for infrastructure automation, covering AWS resources, modules, and best practices.
          </BlogPostDescription>
          <BlogPostLink to="/blog/infrastructure-as-code-with-terraform">Read More</BlogPostLink>
        </BlogPost>
      </BlogContent>
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
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

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BlogPost = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const BlogPostTitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const BlogPostDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1rem;
`;

const BlogPostDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1.5rem;
`;

const BlogPostLink = styled(Link)`
  display: inline-block;
  padding: 0.7rem 1.2rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;

export default BlogPage;
