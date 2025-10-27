# Fahad Aba-Alkhail - Portfolio Website

A terminal-themed portfolio website showcasing software engineering projects and achievements.

## 🚀 Features

- **Terminal-themed UI**: Dark theme with command-line aesthetic
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern Animations**: Smooth scroll effects and interactive elements
- **Contact Form**: Functional contact form with validation
- **Social Links**: Direct links to GitHub and LinkedIn

## 📁 Project Structure

```
fahad_website/
├── index.html      # Main HTML file
├── styles.css      # Styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive features and animations
- **Responsive Design**: Mobile-first approach

## 📦 Deployment on Oracle Cloud Instance

### Option 1: Using Apache Web Server (Recommended)

1. **SSH into your Oracle instance**
   ```bash
   ssh opc@your-oracle-instance-ip
   ```

2. **Install Apache HTTP Server**
   ```bash
   sudo yum install httpd -y
   # Or for Ubuntu/Debian:
   sudo apt-get update && sudo apt-get install apache2 -y
   ```

3. **Transfer files to the server**
   ```bash
   # From your local machine
   scp -r * opc@your-oracle-instance-ip:/tmp/
   
   # SSH into server
   ssh opc@your-oracle-instance-ip
   
   # Move files to web root
   sudo mv /tmp/* /var/www/html/
   sudo chown -R apache:apache /var/www/html/
   # Or for Ubuntu:
   sudo chown -R www-data:www-data /var/www/html/
   ```

4. **Start and enable Apache**
   ```bash
   sudo systemctl start httpd
   sudo systemctl enable httpd
   # Or for Ubuntu:
   sudo systemctl start apache2
   sudo systemctl enable apache2
   ```

5. **Configure firewall**
   ```bash
   sudo firewall-cmd --permanent --add-service=http
   sudo firewall-cmd --permanent --add-service=https
   sudo firewall-cmd --reload
   # Or for Ubuntu:
   sudo ufw allow 'Apache Full'
   ```

6. **Configure ingress rules in Oracle Cloud**
   - Go to Oracle Cloud Console
   - Navigate to Networking > Virtual Cloud Networks
   - Edit your VCN's Security List
   - Add Ingress Rules for HTTP (port 80) and HTTPS (port 443)

7. **Access your website**
   - Open browser and visit: `http://your-oracle-instance-ip`

### Option 2: Using Node.js HTTP Server

1. **Install Node.js on Oracle instance**
   ```bash
   sudo yum install nodejs -y
   # Or for Ubuntu:
   sudo apt-get install nodejs npm -y
   ```

2. **Create a simple server file** (`server.js`)
   ```javascript
   const http = require('http');
   const fs = require('fs');
   const path = require('path');
   const port = 3000;

   const mimeTypes = {
       '.html': 'text/html',
       '.css': 'text/css',
       '.js': 'application/javascript',
   };

   const server = http.createServer((req, res) => {
       let filePath = '.' + req.url;
       if (filePath === './') filePath = './index.html';
       
       const extname = String(path.extname(filePath)).toLowerCase();
       const contentType = mimeTypes[extname] || 'application/octet-stream';
       
       fs.readFile(filePath, (error, content) => {
           if (error) {
               if (error.code === 'ENOENT') {
                   res.writeHead(404, { 'Content-Type': 'text/html' });
                   res.end('File not found', 'utf-8');
               } else {
                   res.writeHead(500);
                   res.end(`Server error: ${error.code}`);
               }
           } else {
               res.writeHead(200, { 'Content-Type': contentType });
               res.end(content, 'utf-8');
           }
       });
   });

   server.listen(port, () => {
       console.log(`Server running at http://localhost:${port}/`);
   });
   ```

3. **Transfer files**
   ```bash
   # From local machine
   scp -r * opc@your-oracle-instance-ip:~/
   ```

4. **Start the server**
   ```bash
   ssh opc@your-oracle-instance-ip
   node server.js
   ```

5. **Keep server running with PM2** (optional)
   ```bash
   npm install -g pm2
   pm2 start server.js
   pm2 startup
   ```

### Option 3: Using Nginx

1. **Install Nginx**
   ```bash
   sudo yum install nginx -y
   # Or for Ubuntu:
   sudo apt-get install nginx -y
   ```

2. **Configure Nginx**
   ```bash
   sudo nano /etc/nginx/conf.d/portfolio.conf
   ```
   
   Add this configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       root /var/www/html;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. **Transfer files and start Nginx**
   ```bash
   sudo cp -r * /var/www/html/
   sudo chown -R nginx:nginx /var/www/html/
   sudo systemctl start nginx
   sudo systemctl enable nginx
   ```

## 🔒 Setting up HTTPS (Optional but Recommended)

1. **Install Certbot**
   ```bash
   sudo yum install certbot python3-certbot-nginx -y
   # Or for Ubuntu:
   sudo apt-get install certbot python3-certbot-nginx -y
   ```

2. **Obtain SSL certificate**
   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

## 🌐 Using a Custom Domain

1. **Point your domain to Oracle instance IP**
   - Add an A record in your domain's DNS settings
   - Point to your Oracle instance's public IP

2. **Update Nginx/Apache configuration**
   - Add your domain name to the server_name directive

## 🔧 Troubleshooting

### Apache not starting
```bash
sudo systemctl status httpd
sudo journalctl -xe
```

### Permission denied errors
```bash
sudo chmod -R 755 /var/www/html
sudo chown -R apache:apache /var/www/html
```

### Cannot access from outside Oracle Cloud
- Check Security List rules in Oracle Cloud Console
- Ensure ingress rules allow HTTP (80) and HTTPS (443) from 0.0.0.0/0
- Check if firewall is blocking traffic

### Files not displaying correctly
- Ensure file extensions match (.html, .css, .js)
- Check browser console for errors
- Verify file permissions

## 📝 Customization

To customize the portfolio:

1. **Update personal information** in `index.html`
   - Name, title, location, email
   - Social media links
   - Projects and achievements

2. **Modify colors** in `styles.css`
   - Edit CSS variables in `:root` selector
   - Change color scheme to match your preference

3. **Add animations** in `script.js`
   - Customize scroll animations
   - Add additional interactive features

## 📧 Contact

- **Email**: fkabaalkhail@gmail.com
- **LinkedIn**: [Fahad Aba-Alkhail](https://www.linkedin.com/in/fkabaalkhail/)
- **GitHub**: [@fkabaalkhail](https://github.com/fkabaalkhail)
- **Location**: Ottawa, ON

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ by Fahad Aba-Alkhail**

