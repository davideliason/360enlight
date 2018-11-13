## 360Enlight
### Holistic Enlightment
#### [David Eliason](http://www.davethemaker.com)

### Description
(v2.0) Code pivot to using a serverless architecture.

(v1.0) The first version spun up an Express server on an Ubuntu 16.04 EC2 instnace acting as an API endpoint connected to mongoDB instance. On the client side was a CRA obtained JSON values using fetch/axios then parsing them via parent and child components. Included React Router and form for saving new data

### Dev Notes for v1.0
1. Created VPC with a public-facing subnet/route table linked to Internet Gateway, and a private subnet attached to default route table
2. Created Ubuntu EC2 instance within public subnet
3. Installed Node.js, Nginx on the EC2
4. On the AWS side, creted A record on Route53 to route traffic to the EC2 instance
  4.1 Add PM2 module and config so that the server will keep running even after SSH connection is broken
  4.2 install local, to the EC2 instance, MongoDB instance
5. Back to coding on repo, installed client with CRA, added proxy pointing to EC2 port
6. On the backend, created route for serving API JSON data (hard-coded right now), and default routes point to static files of CRA
  6.1 to keep the EC2 instance running, 'npm i --save pm2' and then 'pm2 start server.js' to keep it running

