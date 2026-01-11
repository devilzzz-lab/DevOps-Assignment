variable "aws_region" {
  default = "us-east-1"
}

variable "project_name" {
  default = "devops-assignment"
}

variable "backend_image" {
  description = "Backend image from ECR"
  type        = string
}

variable "frontend_image" {
  description = "Frontend image from ECR"
  type        = string
}
