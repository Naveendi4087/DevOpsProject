resource "aws_instance" "backend" {
  ami           = "ami-04f8d7ed2f1a54b14"
  instance_type = "t2.micro"
  subnet_id     = data.aws_subnet.subnet.id
  security_groups = [aws_security_group.allow_web.id]

  user_data = <<-EOF
    #!/bin/bash
    sudo yum update -y
    sudo yum install -y docker
    service docker start
    usermod -a -G docker ec2-user
    docker run -d -p 3000:3000 sahiruw/sf:0.0
    docker run -d -p 5000:5000 --env MONGO_URI=mongodb+srv://Thasha:thasha@cluster0.tpcr3a1.mongodb.net/Saloon?retryWrites=true sahiruw/sb:0.0
    sudo yum install -y nginx
    
    # Write content to my-app.conf in one line
    sudo bash -c 'echo "server {
      listen 80;
      server_name my-app.com;
    
      location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
      }
    }" > /etc/nginx/conf.d/my-app.conf'

    # Restart nginx to apply changes
    sudo systemctl start nginx
    sudo systemctl restart nginx
  EOF

  tags = {
    Name = "backend"
  }
}
