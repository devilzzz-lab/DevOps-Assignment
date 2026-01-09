<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>DevOps Assignment — Multi-Cloud Automation Project</h1>

<p><strong>Status:</strong></p>
<ul>
  <li>Phase 2 (Backend &amp; Git Workflow) completed.</li>
  <li>Phase 3 (Frontend Dockerization &amp; Testing) in progress.</li>
  <li>Phase 4–7 planned.</li>
</ul>

<p>
This project demonstrates end-to-end DevOps practices by designing, containerizing, testing, and deploying a two-tier web application across multiple cloud platforms using automated CI/CD pipelines and Infrastructure as Code. 
</p>
<p>
The project follows professional Git workflows, container best practices, cloud-native architecture, and production-grade observability and security practices. 
</p>

<h2>Project Overview</h2>
<p>The application consists of:</p>
<ul>
  <li>Backend service built using FastAPI (Python)</li>
  <li>Frontend application built using Next.js</li>
  <li>Docker-based containerization</li>
  <li>GitHub-based version control and Pull Request workflow</li>
  <li>CI/CD automation using GitHub Actions (planned)</li>
  <li>Multi-cloud deployment using Terraform</li>
  <li>Target clouds: AWS and Azure</li>
</ul>

<h2>Highlights</h2>
<ul>
  <li>Structured Git workflow using main, develop, and feature branches</li>
  <li>Backend implemented using FastAPI with clean REST APIs</li>
  <li>Backend unit tests written using pytest</li>
  <li>Backend Dockerized using multi-stage builds and non-root user</li>
  <li>Environment-based configuration support</li>
  <li>Production-ready repository structure</li>
  <li>Cloud-ready application design</li>
</ul>

<h2>Project Phases</h2>

<h3>🟩 PHASE 1 – Version Control &amp; Git Workflow (Completed)</h3>
<h4>Objective</h4>
<p>Establish a professional Git workflow aligned with real-world DevOps practices.</p>

<h4>Key activities</h4>
<ul>
  <li>Forked the provided repository</li>
  <li>Maintained original project structure</li>
  <li>Implemented branch strategy: main, develop, feature/*</li>
  <li>Used feature branches for development</li>
  <li>Merged changes using Pull Requests</li>
  <li>Avoided direct commits to main</li>
  <li>Used clear and meaningful commit messages</li>
</ul>

<h4>Deliverable</h4>
<p>Version-controlled repository with clean commit history and Pull Request workflow.</p>

<h3>🟦 PHASE 2 – Backend API Implementation &amp; Dockerization (Completed)</h3>
<h4>Objective</h4>
<p>Develop a production-ready backend service with testing and containerization.</p>

<h4>Key activities</h4>
<ul>
  <li>Implemented FastAPI backend service</li>
  <li>Exposed <code>/api/health</code> and <code>/api/message</code> endpoints</li>
  <li>Added environment-based configuration</li>
  <li>Wrote unit tests for backend endpoints</li>
  <li>Dockerized backend using multi-stage Dockerfile</li>
  <li>Ensured non-root container execution</li>
</ul>

<h4>Deliverable</h4>
<p>Tested and Dockerized FastAPI backend ready for CI/CD and cloud deployment.</p>

<h3>🟨 PHASE 3 – Frontend Testing &amp; Dockerization (In Progress)</h3>
<h4>Objective</h4>
<p>Containerize frontend application and validate backend integration.</p>

<h4>Planned activities</h4>
<ul>
  <li>Add frontend unit and end-to-end tests</li>
  <li>Dockerize Next.js application using multi-stage builds</li>
  <li>Configure environment-based backend API URL</li>
  <li>Integrate frontend and backend via Docker Compose</li>
</ul>

<h4>Deliverable</h4>
<p>Production-ready frontend container with automated testing.</p>

<h3>🟧 PHASE 4 – CI/CD Pipeline Automation (Planned)</h3>
<h4>Objective</h4>
<p>Automate build, test, containerization, and deployment workflows.</p>

<h4>Planned activities</h4>
<ul>
  <li>Configure GitHub Actions pipelines</li>
  <li>Trigger pipelines on develop and main branches</li>
  <li>Build and tag Docker images using Git SHA</li>
  <li>Push images to AWS ECR and Azure ACR</li>
  <li>Automate deployments to AWS and Azure</li>
</ul>

<h4>Deliverable</h4>
<p>Fully automated CI/CD pipeline with zero manual steps./p>

<h3>🟥 PHASE 5 – Infrastructure as Code (Multi-Cloud) (Planned)</h3>
<h4>Objective</h4>
<p>Provision cloud infrastructure using Terraform.</p>

<h4>Planned activities</h4>
<ul>
  <li>AWS ECS Fargate with Application Load Balancer</li>
  <li>Azure Container Apps or AKS</li>
  <li>VPC/VNet networking and security controls</li>
  <li>IAM roles and managed identities</li>
  <li>Secret management using cloud-native services</li>
</ul>

<h4>Deliverable</h4>
<p>Reusable Terraform-based infrastructure for AWS and Azure.</p>

<h3>🟪 PHASE 6 – Monitoring, Alerting &amp; Observability (Planned)</h3>
<h4>Objective</h4>
<p>Implement monitoring and alerting for applications and infrastructure.</p>

<h4>Planned activities</h4>
<ul>
  <li>Configure cloud-native monitoring services</li>
  <li>Collect CPU, memory, and request metrics</li>
  <li>Create dashboards for application health</li>
  <li>Configure alerts for failures and resource saturation</li>
</ul>

<h4>Deliverable</h4>
<p>Production-grade monitoring and alerting setup.</p>

<h3>🟫 PHASE 7 – Load Balancing &amp; Resiliency (Planned)</h3>
<h4>Objective</h4>
<p>Validate high availability and fault tolerance./p>

<h4>Planned activities</h4>
<ul>
  <li>Run multiple container instances</li>
  <li>Validate load balancer traffic distribution</li>
  <li>Simulate instance failures</li>
  <li>Confirm zero-downtime availability</li>
</ul>

<h4>Deliverable</h4>
<p>Highly available and resilient application deployment.</p>

<h2>Technical Stack</h2>
<ul>
  <li><strong>Backend:</strong> FastAPI (Python)</li>
  <li><strong>Frontend:</strong> Next.js</li>
  <li><strong>Containerization:</strong> Docker</li>
  <li><strong>CI/CD:</strong> GitHub Actions</li>
  <li><strong>IaC:</strong> Terraform</li>
  <li><strong>Cloud:</strong> AWS, Azure</li>
  <li><strong>Testing:</strong> Pytest, Jest</li>
  <li><strong>Monitoring:</strong> CloudWatch, Azure Monitor</li>
  <li><strong>Version Control:</strong> Git &amp; GitHub</li>
</ul>

<h2>Documentation</h2>
<ul>
  <li>Project overview and workflow: Root README</li>
  <li>Backend service documentation: backend README</li>
  <li>Frontend application documentation: frontend README</li>
</ul>

</body>
</html>
