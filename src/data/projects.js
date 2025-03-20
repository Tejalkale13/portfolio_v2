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
