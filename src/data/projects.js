const projects = [
  {
    id: "kubernetes-microservices",
    title: "Kubernetes-based Microservices Application Deployment on GKE",
    shortDescription: "Microservices architecture deployed on Google Kubernetes Engine with auto-scaling capabilities.",
    description: `Set up a Google Kubernetes Engine (GKE) cluster and deployed a microservices-based application. 
    The frontend was developed using React.js, the backend with Flask, and PostgreSQL as the database. 
    Configured horizontal pod auto-scaling based on dynamic CPU usage, allowing the application to scale up and down based on demand. 
    This ensured optimal performance during traffic spikes and cost efficiency during low usage periods.`,
    technologies: ["Google Kubernetes Engine (GKE)", "Kubernetes", "React.js", "Flask", "PostgreSQL", "Docker", "Horizontal Pod Autoscaling (HPA)"],
    githubLink: "https://github.com/Prasad-b-git/3-tier-application.git",
    demoLink: "",
    image: "../../images/projects/k8s.png",
    category: "kubernetes",
    featured: true,
    diagrams: [
      {
        title: "Architecture Diagram",
        image: "../../images/projects/k8s_Arc.png"
      }
    ],
    challenges: [
      "Ensuring database persistence with ephemeral containers",
      "Configuring proper CPU thresholds for auto-scaling",
      "Setting up secure communication between microservices"
    ],
    solutions: [
      "Implemented Persistent Volumes for database storage",
      "Fine-tuned HPA settings based on load testing results",
      "Used Kubernetes Secrets and Service Accounts for secure communication"
    ]
  },
  {
    id: "aws-terraform-infrastructure",
    title: "Modularized AWS Infrastructure Deployment Using Terraform",
    shortDescription: "Reusable Terraform modules for AWS infrastructure deployment",
    description: `Designed and implemented modular infrastructure on AWS using Terraform. 
    Reusable modules configured for networking, security, compute, and load balancers. 
    Set up a highly available VPC, deploy EC2 instances with security groups, 
    and integrate an Application load balancer for traffic distribution. 
    Used S3 for Terraform state management, ensuring scalability, maintainability, and streamlined automation.`,
    technologies: ["VPC", "EC2", "ALB", "S3", "Internet Gateway", "Subnets", "Git", "GitHub", "Security Groups", "AWS CLI", "HCL", "Terraform"],
    githubLink: "https://github.com/Prasad-b-git/Terraform_templates.git",
    demoLink: "",
    image: "../../images/projects/terraform.jpg",
    category: "aws",
    featured: true,
    diagrams: [
      {
        title: "Infrastructure Diagram",
        image: "../../images/projects/Terraform.png"
      }
    ],
    challenges: [
      "Managing infrastructure state across team members",
      "Ensuring security best practices",
      "Creating reusable modules that work in different environments"
    ],
    solutions: [
      "Implemented remote state with S3 and DynamoDB locking",
      "Created security module based on AWS Well-Architected Framework",
      "Used Terraform variables and locals for environment-specific configurations"
    ]
  },
  {
    id: "nodejs-cicd-pipeline",
    title: "CI/CD Pipeline for Node.js Todo Application",
    shortDescription: "Automated testing and deployment pipeline for a Node.js application",
    description: `Designed and implemented a CI/CD pipeline using GitHub Actions and Docker to automate testing 
    and deployment for a Node.js Todo app. The pipeline runs on a self-hosted GitHub Runner, handling code checkout, 
    dependency installation, testing, Docker image building, and container deployment. 
    Integrated an email alert system for pipeline failures.`,
    technologies: ["GitHub Actions", "Docker", "Node.js", "GitHub Self-hosted Runner", "Email Notifications (SMTP)"],
    githubLink: "https://github.com/Prasad-b-git/todo-app1.git",
    demoLink: "https://todo-app.example.com",
    image: "../../images/projects/cicd.webp",
    category: "cicd",
    featured: true,
    diagrams: [
      {
        title: "Pipeline Workflow",
        image: "../../images/projects/Cicd_arc.png"
      }
    ],
    challenges: [
      "Setting up a self-hosted runner with all required dependencies",
      "Ensuring secure handling of deployment credentials",
      "Minimizing deployment downtime"
    ],
    solutions: [
      "Created a Docker container for the runner with all dependencies pre-installed",
      "Used GitHub Secrets for all sensitive information",
      "Implemented blue-green deployment strategy"
    ]
  }
];

export default projects;
