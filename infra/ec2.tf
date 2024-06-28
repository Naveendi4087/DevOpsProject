# resource "aws_instance" "backend" {
#   ami           = "ami-0150a7de9db550188"
#   instance_type = "t4g.nano"
#   subnet_id     = data.aws_subnet.subnet.id
#   security_groups = [aws_security_group.allow_web.id]

#   user_data = <<-EOF
#               #!/bin/bash
#               yum update -y
#               yum install -y docker
#               service docker start
#               usermod -a -G docker ec2-user
#               docker run -d -p 5000:5000 --env MONGO_URI=mongodb+srv://Thasha:thasha@cluster0.tpcr3a1.mongodb.net/Saloon?retryWrites=true&w=majority thashara/backendv1:5
#               EOF

#   tags = {
#     Name = "backend"
#   }
# }

resource "aws_instance" "frontend" {
  ami           = "ami-0150a7de9db550188" 
  instance_type = "t4g.nano"
  subnet_id     = data.aws_subnet.subnet.id
  security_groups = [aws_security_group.allow_web.id]

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install -y docker
              service docker start
              usermod -a -G docker ec2-user
              docker pull thashara/backendv1:5
              docker pull thashara/frontendv1:5
              docker run -d --name backend -p 5000:5000 -e MONGODB_URI="mongodb+srv://Thasha:thasha@cluster0.tpcr3a1.mongodb.net/Saloon?retryWrites=true&w=majority" thashara/backendv1:5
              docker run -d --name frontend -p 3000:3000 thashara/frontendv1:5
              EOF

  tags = {
    Name = "frontend"
  }

#   provisioner "file" {
#     source      = "../docker-compose.yml" 
#     destination = "/docker-compose.yml" 
#   }
}
