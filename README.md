## 360Enlight
### Holistic Enlightment
#### [David Eliason](http://www.davethemaker.com)

### Description
The codebase for spinning up the backend on an EC2 instance on the AWS cloud platform and use of microservices.

### Dev Notes
1. Created VPC with a public-facing subnet/route table linked to Internet Gateway, and a private subnet attached to default route table
2. Created Ubuntu EC2 instance within public subnet
3. Installed Node.js, Nginx on the EC2
4. On the AWS side, creted A record on Route53 to route traffic to the EC2 instance
