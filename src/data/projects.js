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
  },
  {
    id: "aws-terraform-infrastructure-2",
    title: "AWS Infrastructure Automation using Terraform",
    shortDescription: "Infrastructure as Code (IaC) for AWS resource provisioning and management",
    description: `Created and managed AWS infrastructure using Terraform for reliable and repeatable deployments. 
    Used Terraform modules to simplify resource creation and improve infrastructure maintenance. 
    Followed Infrastructure as Code (IaC) practices for version control and automated environment setup.`,
    technologies: ["AWS", "Terraform", "Infrastructure as Code", "Git", "GitHub"],
    githubLink: "https://github.com/tejalbkale/aws-terraform-automation.git",
    demoLink: "",
    image: "../../images/projects/terraform-aws.jpg",
    category: "aws",
    featured: false,
    challenges: [
      "Ensuring consistent infrastructure across multiple environments",
      "Managing state files securely",
      "Implementing effective module design"
    ],
    solutions: [
      "Created environment-specific variable files",
      "Implemented remote state with proper backend configuration",
      "Designed reusable modules with clear interfaces"
    ]
  },
  {
    id: "multi-container-app",
    title: "Multi-Container Application Development using Docker Compose",
    shortDescription: "Web application with Flask frontend and MySQL backend orchestrated with Docker Compose",
    description: `Developed a simple web application with Flask as the frontend and MySQL as the backend.
    Used Docker Compose to manage and orchestrate multiple containers working together seamlessly.
    Gained hands-on experience in containerized application development and deployment.`,
    technologies: ["Docker", "Docker Compose", "Flask", "MySQL", "Python"],
    githubLink: "https://github.com/tejalbkale/docker-compose-app.git",
    demoLink: "",
    image: "../../images/projects/docker-compose.jpg",
    category: "docker",
    featured: false,
    challenges: [
      "Container networking configuration",
      "Data persistence between container restarts",
      "Environment variable management across services"
    ],
    solutions: [
      "Implemented custom Docker networks",
      "Used Docker volumes for database persistence",
      "Utilized environment files for configuration management"
    ]
  },
  {
    id: "resource-monitoring",
    title: "Resource Monitoring and Security Automation",
    shortDescription: "Shell and Python scripts for server monitoring and security automation",
    description: `Developed a shell script to monitor server resource usage (CPU, memory, disk) and send email alerts when usage
    exceeds a threshold. Created a Python script to parse web server logs, identify IPs causing failed login attempts, and 
    dynamically block those IPs by updating firewall rules.`,
    technologies: ["Bash", "Python", "Linux", "System Administration", "Security Automation"],
    githubLink: "https://github.com/tejalbkale/resource-monitoring.git",
    demoLink: "",
    image: "../../images/projects/monitoring.jpg",
    category: "automation",
    featured: false,
    challenges: [
      "Ensuring minimal performance impact on monitored systems",
      "Accurate detection of attack patterns",
      "Automating firewall rule updates safely"
    ],
    solutions: [
      "Optimized script performance with efficient resource usage",
      "Implemented pattern recognition algorithms for log analysis",
      "Created failsafe mechanisms for firewall rule updates"
    ]
  }
];

export default projects;
