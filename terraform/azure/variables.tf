variable "location" {
  default = "East US"
}

variable "resource_group_name" {
  default = "rg-devops-assignment"
}

variable "backend_image" {
  description = "Backend image from ACR"
  type        = string
}

variable "frontend_image" {
  description = "Frontend image from ACR"
  type        = string
}
