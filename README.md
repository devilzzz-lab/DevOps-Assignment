<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>Multi-Cloud Deployment Automation Project</h1>

<p><strong>Status:</strong></p>
<ul>
  <li>Phase 1 to Phase 6 completed ✅</li>
  <li>Phase 7 (Load Balancing &amp; Resiliency) planned.</li>
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
  <li>CI/CD automation using GitHub Actions</li>
  <li>Multi-cloud deployment using Terraform</li>
  <li>Target clouds: AWS and Azure</li>
</ul>

<h2>Highlights</h2>
<ul>
  <li>Structured Git workflow using main, develop, and feature branches</li>
  <li>Backend implemented using FastAPI with clean REST APIs</li>
  <li>Backend unit tests written using pytest</li>
  <li>Backend Dockerized using multi-stage builds and non-root user</li>
  <li>Frontend Dockerized with Next.js standalone mode</li>
  <li>Environment-based configuration support</li>
  <li>Production-ready repository structure</li>
  <li>Cloud-ready application design</li>
  <li>Automated CI/CD pipeline with GitHub Actions</li>
  <li>Multi-cloud infrastructure managed with Terraform</li>
  <li>Production-grade monitoring and alerting on AWS and Azure</li>
</ul>

<h2>Project Phases</h2>

<h3>🟩 PHASE 1 – Version Control &amp; Git Workflow (Completed ✅)</h3>
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

<h3>🟦 PHASE 2 – Backend API Implementation &amp; Dockerization (Completed ✅)</h3>
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

<h3>🟨 PHASE 3 – Frontend Testing &amp; Dockerization (Completed ✅)</h3>
<h4>Objective</h4>
<p>Containerize frontend application and validate backend integration.</p>

<h4>Completed activities</h4>
<ul>
  <li>Added frontend unit and end-to-end tests</li>
  <li>Dockerized Next.js application using multi-stage builds</li>
  <li>Configured environment-based backend API URL</li>
  <li>Integrated frontend and backend via Docker Compose</li>
</ul>

<h4>Deliverable</h4>
<p>Production-ready frontend container with automated testing.</p>

<h3>🟧 PHASE 4 – CI/CD Pipeline Automation (Completed ✅)</h3>
<h4>Objective</h4>
<p>Automate build, test, containerization, and deployment workflows.</p>

<h4>Completed activities</h4>
<ul>
  <li>Configured GitHub Actions pipelines</li>
  <li>Trigger pipelines on develop and main branches</li>
  <li>Build and tag Docker images using Git SHA</li>
  <li>Push images to AWS ECR and Azure ACR</li>
  <li>Automated deployments to AWS and Azure</li>
</ul>

<h4>Deliverable</h4>
<p>Fully automated CI/CD pipeline with zero manual steps.</p>

<h3>🟥 PHASE 5 – Infrastructure as Code (Multi-Cloud) (Completed ✅)</h3>
<h4>Objective</h4>
<p>Provision cloud infrastructure using Terraform.</p>

<h4>Completed activities</h4>
<ul>
  <li>AWS ECS Fargate with Application Load Balancer</li>
  <li>Azure Container Apps with managed networking</li>
  <li>VPC/VNet networking and security controls</li>
  <li>IAM roles and managed identities</li>
  <li>Secret management using cloud-native services</li>
  <li>S3 backend for Terraform state management (AWS)</li>
  <li>Azure Storage backend for Terraform state (Azure)</li>
  <li>DynamoDB for state locking (AWS)</li>
</ul>

<h4>Deliverable</h4>
<p>Reusable Terraform-based infrastructure for AWS and Azure.</p>

<h3>🟪 PHASE 6 – Monitoring, Alerting &amp; Observability (Completed ✅)</h3>
<h4>Objective</h4>
<p>Implement monitoring and alerting for applications and infrastructure.</p>

<h4>Completed activities</h4>
<ul>
  <li>Configured AWS CloudWatch dashboards with ECS and ALB metrics</li>
  <li>Configured Azure Monitor dashboards with Container Apps metrics</li>
  <li>Collected CPU, memory, request count, and response time metrics</li>
  <li>Created production-grade dashboards for application health</li>
  <li>Configured CloudWatch alarms for CPU threshold (70% for 5 minutes)</li>
  <li>Configured Azure Monitor alerts for CPU threshold with 5-minute lookback</li>
  <li>Set up SNS email notifications (AWS) and action groups (Azure)</li>
  <li>Validated alert delivery via email</li>
</ul>

<h4>Deliverable</h4>
<p>Production-grade monitoring dashboards and alerting system on both AWS and Azure.</p>

<h3>🟫 PHASE 7 – Load Balancing &amp; Resiliency (Planned)</h3>
<h4>Objective</h4>
<p>Validate high availability and fault tolerance.</p>

<h4>Planned activities</h4>
<ul>
  <li>Run multiple container instances</li>
  <li>Validate load balancer traffic distribution</li>
  <li>Simulate instance failures</li>
  <li>Confirm zero-downtime availability</li>
</ul>

<h4>Status</h4>
<p>Highly available and resilient application deployment pending.</p>

<h2>Technical Stack</h2>
<ul>
  <li><strong>Backend:</strong> FastAPI (Python)</li>
  <li><strong>Frontend:</strong> Next.js</li>
  <li><strong>Containerization:</strong> Docker</li>
  <li><strong>CI/CD:</strong> GitHub Actions</li>
  <li><strong>IaC:</strong> Terraform</li>
  <li><strong>Cloud:</strong> AWS, Azure</li>
  <li><strong>Testing:</strong> Pytest, Jest</li>
  <li><strong>Monitoring:</strong> AWS CloudWatch, Azure Monitor</li>
  <li><strong>Alerting:</strong> AWS SNS, Azure Action Groups</li>
  <li><strong>Version Control:</strong> Git &amp; GitHub</li>
</ul>

<h2>Documentation</h2>
<ul>
  <li>Project overview and workflow: Root README</li>
  <li>Backend service documentation: backend README</li>
  <li>Frontend application documentation: frontend README</li>
  <li>AWS CloudWatch setup guide: monitoring documentation</li>
  <li>Azure Monitor setup guide: monitoring documentation</li>
</ul>

<hr>

<h2>📦 Deliverables</h2>

<h3>Mandatory</h3>
<p>GitHub repository with:</p>
<ul>
  <li>Source code</li>
  <li>Dockerfiles</li>
  <li>Terraform configs</li>
  <li>CI/CD workflows</li>
  <li>README.md</li>
</ul>

<h3>Hosted URLs</h3>
<ul>
  <li>Frontend &amp; backend for each cloud (AWS &amp; Azure)</li>
</ul>

<h3>Demo Video (5–8 minutes)</h3>
<p>Covering:</p>
<ul>
  <li>Architecture</li>
  <li>Git workflow</li>
  <li>Dockerization</li>
  <li>CI/CD</li>
  <li>Terraform</li>
  <li>Monitoring &amp; alerts</li>
  <li>Security</li>
  <li>Load balancing test</li>
</ul>

<h3>Evidence</h3>
<ul>
  <li>CI/CD logs</li>
  <li>Terraform apply output or state</li>
  <li>AWS CloudWatch dashboard screenshots</li>
  <li>Azure Monitor dashboard screenshots</li>
  <li>Alert configuration screenshots</li>
  <li>Email notification screenshots</li>
  <li>Secret retrieval proof (non-sensitive)</li>
</ul>

<h2>✅ Submission Checklist</h2>
<ul>
  <li>✅ README.md with clear instructions</li>
  <li>✅ Backend &amp; frontend tests passing</li>
  <li>✅ Docker images built &amp; pushed</li>
  <li>✅ Deployed on AWS and Azure</li>
  <li>✅ Terraform-only provisioning</li>
  <li>✅ Automated CI/CD deployments</li>
  <li>✅ Monitoring dashboards &amp; alerts configured</li>
  <li>✅ Secure secrets &amp; IAM roles</li>
  <li>⏳ Demo video pending</li>
  <li>⏳ Load balancing test pending</li>
</ul>

<h2>🏆 Grading Rubric</h2>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Criteria</th>
      <th>Weight</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Version Control &amp; Documentation</td>
      <td>10%</td>
      <td>✅ Complete</td>
    </tr>
    <tr>
      <td>Dockerization</td>
      <td>15%</td>
      <td>✅ Complete</td>
    </tr>
    <tr>
      <td>CI/CD Automation</td>
      <td>20%</td>
      <td>✅ Complete</td>
    </tr>
    <tr>
      <td>Multi-Cloud Terraform (2 Clouds)</td>
      <td>25%</td>
      <td>✅ Complete</td>
    </tr>
    <tr>
      <td>Monitoring &amp; Alerting</td>
      <td>10%</td>
      <td>✅ Complete</td>
    </tr>
    <tr>
      <td>Security &amp; IAM</td>
      <td>5%</td>
      <td>✅ Complete</td>
    </tr>
    <tr>
      <td>Load Balancing &amp; Resiliency</td>
      <td>10%</td>
      <td>⏳ Pending</td>
    </tr>
    <tr>
      <td>Demo Video &amp; Presentation</td>
      <td>5%</td>
      <td>⏳ Pending</td>
    </tr>
  </tbody>
</table>

<h2>🎯 Current Progress: 90% Complete</h2>
<p>
All technical implementation phases (1-6) are complete. Remaining tasks include load balancing validation and demo video creation.
</p>

</body>
</html>
