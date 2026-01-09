variable "aws_region" {
  default = "us-east-1"
}

variable "project_name" {
  default = "devops-assignment"
}

variable "backend_image" {
  description = "Backend image URI"
  type        = string
}