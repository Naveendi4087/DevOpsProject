provider "aws" {
  region = "ap-south-1" # Change to your preferred region
}

data "aws_vpc" "main" {
  id = "vpc-07e22bd2ef29ffa46"
}

# resource "aws_subnet" "subnet" {
#   vpc_id            = aws_vpc.main.id
#   cidr_block        = "10.0.1.0/24"
#   availability_zone = "ap-south-1a"
# }

data "aws_subnet" "subnet" {
    id = "subnet-04bc5de7ee1e33467"
}


