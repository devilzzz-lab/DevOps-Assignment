terraform {
  backend "s3" {
    bucket         = "devops-assignment-784154679353-us-east-1-tf-state"
    key            = "aws/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}


provider "aws" {
  region = var.aws_region
}
