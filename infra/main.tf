provider "aws" {
  region = "ap-south-1" 
}

data "aws_vpc" "main" {
  id = "vpc-07e22bd2ef29ffa46"
}

data "aws_subnet" "subnet" {
    id = "subnet-0f124cf04da93d0a6"
}

terraform {
  backend "s3" {
    bucket         = "tf-state-f-s"
    key            = "sanda-terraform.tfstate"
    region         = "eu-north-1"
  }
}


