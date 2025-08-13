#!/bin/bash

# ByteRiver Website - 20i VPS Deployment Script
# This script automates the deployment process to your 20i VPS

set -e  # Exit on any error

echo "🚀 ByteRiver Website - VPS Deployment Script"
echo "============================================="

# Configuration
VPS_HOST="${VPS_HOST:-your-vps-ip}"
VPS_USER="${VPS_USER:-ubuntu}"
DOMAIN="${DOMAIN:-yourdomain.com}"
PROJECT_NAME="byteriver-website"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if required environment variables are set
check_config() {
    log_info "Checking configuration..."
    
    if [ "$VPS_HOST" = "your-vps-ip" ]; then
        log_error "Please set VPS_HOST environment variable"
        echo "Example: export VPS_HOST=123.456.789.0"
        exit 1
    fi
    
    if [ "$DOMAIN" = "yourdomain.com" ]; then
        log_warning "Using default domain. Set DOMAIN environment variable for your domain"
        echo "Example: export DOMAIN=byteriver.tech"
    fi
    
    log_success "Configuration checked"
}

# Build the application
build_app() {
    log_info "Building application for production..."
    
    if [ ! -f "package.json" ]; then
        log_error "package.json not found. Please run this script from the project root."
        exit 1
    fi
    
    # Install dependencies if node_modules doesn't exist
    if [ ! -d "node_modules" ]; then
        log_info "Installing dependencies..."
        npm install
    fi
    
    # Build the application
    npm run build
    
    if [ ! -d "dist" ]; then
        log_error "Build failed. dist/ directory not found."
        exit 1
    fi
    
    log_success "Application built successfully"
}

# Create deployment package
create_package() {
    log_info "Creating deployment package..."
    
    # Create temporary deployment directory
    DEPLOY_DIR="deploy-$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$DEPLOY_DIR"
    
    # Copy built files
    cp -r dist/* "$DEPLOY_DIR/"
    
    # Copy additional files
    cp README.md "$DEPLOY_DIR/"
    
    # Create deployment info
    cat > "$DEPLOY_DIR/deployment-info.txt" << EOF
ByteRiver Website Deployment
============================
Build Date: $(date)
Git Commit: $(git rev-parse HEAD 2>/dev/null || echo "N/A")
Node Version: $(node --version)
NPM Version: $(npm --version)

Deployment Instructions:
1. Upload contents to /var/www/$PROJECT_NAME/
2. Configure Nginx to serve from this directory
3. Set up SSL certificate
4. Update DNS records

For detailed instructions, see README.md
EOF
    
    # Create archive
    tar -czf "${PROJECT_NAME}-deployment.tar.gz" -C "$DEPLOY_DIR" .
    rm -rf "$DEPLOY_DIR"
    
    log_success "Deployment package created: ${PROJECT_NAME}-deployment.tar.gz"
}

# Deploy to VPS (if SSH access is configured)
deploy_to_vps() {
    log_info "Attempting to deploy to VPS..."
    
    # Check if SSH key exists
    if [ ! -f ~/.ssh/id_rsa ] && [ ! -f ~/.ssh/id_ed25519 ]; then
        log_warning "No SSH key found. Please set up SSH key authentication first."
        log_info "Manual deployment: Upload ${PROJECT_NAME}-deployment.tar.gz to your VPS"
        return
    fi
    
    # Test SSH connection
    if ! ssh -o ConnectTimeout=10 -o BatchMode=yes "$VPS_USER@$VPS_HOST" exit 2>/dev/null; then
        log_warning "Cannot connect to VPS via SSH. Please check your connection."
        log_info "Manual deployment: Upload ${PROJECT_NAME}-deployment.tar.gz to your VPS"
        return
    fi
    
    log_info "Uploading files to VPS..."
    
    # Upload deployment package
    scp "${PROJECT_NAME}-deployment.tar.gz" "$VPS_USER@$VPS_HOST:/tmp/"
    
    # Deploy on VPS
    ssh "$VPS_USER@$VPS_HOST" << EOF
        set -e
        
        # Create project directory
        sudo mkdir -p /var/www/$PROJECT_NAME
        
        # Extract files
        cd /tmp
        tar -xzf ${PROJECT_NAME}-deployment.tar.gz
        
        # Move files to web directory
        sudo cp -r * /var/www/$PROJECT_NAME/
        sudo chown -R www-data:www-data /var/www/$PROJECT_NAME
        sudo chmod -R 755 /var/www/$PROJECT_NAME
        
        # Clean up
        rm -f ${PROJECT_NAME}-deployment.tar.gz
        
        echo "Files deployed to /var/www/$PROJECT_NAME"
EOF
    
    log_success "Files deployed to VPS successfully!"
    
    # Generate Nginx configuration
    generate_nginx_config
}

# Generate Nginx configuration
generate_nginx_config() {
    log_info "Generating Nginx configuration..."
    
    cat > "nginx-${PROJECT_NAME}.conf" << EOF
# ByteRiver Website - Nginx Configuration
# Save this as: /etc/nginx/sites-available/$PROJECT_NAME

server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    # Redirect to HTTPS
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    server_name $DOMAIN www.$DOMAIN;
    
    # SSL Configuration (will be added by Certbot)
    # ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    
    # Document root
    root /var/www/$PROJECT_NAME;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle client-side routing
    location / {
        try_files \$uri \$uri/ /index.html;
    }
    
    # Optional: Admin panel protection
    location /admin {
        # Add basic auth or IP restrictions here if needed
        try_files \$uri \$uri/ /index.html;
    }
}
EOF
    
    log_success "Nginx configuration generated: nginx-${PROJECT_NAME}.conf"
}

# Generate SSL setup script
generate_ssl_script() {
    log_info "Generating SSL setup script..."
    
    cat > "setup-ssl.sh" << EOF
#!/bin/bash
# SSL Setup Script for ByteRiver Website

# Install Certbot
sudo apt update
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN

# Test automatic renewal
sudo certbot renew --dry-run

echo "SSL certificate installed successfully!"
echo "Your website is now available at: https://$DOMAIN"
EOF
    
    chmod +x setup-ssl.sh
    log_success "SSL setup script generated: setup-ssl.sh"
}

# Main deployment process
main() {
    echo
    log_info "Starting ByteRiver Website deployment process..."
    echo
    
    check_config
    build_app
    create_package
    generate_nginx_config
    generate_ssl_script
    
    echo
    log_success "Deployment preparation complete!"
    echo
    echo "📦 Files created:"
    echo "   • ${PROJECT_NAME}-deployment.tar.gz (website files)"
    echo "   • nginx-${PROJECT_NAME}.conf (Nginx configuration)"
    echo "   • setup-ssl.sh (SSL setup script)"
    echo
    echo "🚀 Next steps:"
    echo "   1. Upload ${PROJECT_NAME}-deployment.tar.gz to your VPS"
    echo "   2. Extract to /var/www/$PROJECT_NAME/"
    echo "   3. Copy nginx-${PROJECT_NAME}.conf to /etc/nginx/sites-available/"
    echo "   4. Enable the site: sudo ln -s /etc/nginx/sites-available/$PROJECT_NAME /etc/nginx/sites-enabled/"
    echo "   5. Test Nginx: sudo nginx -t"
    echo "   6. Reload Nginx: sudo systemctl reload nginx"
    echo "   7. Run setup-ssl.sh on your VPS to enable HTTPS"
    echo
    echo "📖 For detailed instructions, see README.md"
    echo
    
    # Attempt automatic deployment if possible
    if [ "$1" = "--auto" ]; then
        deploy_to_vps
    else
        log_info "Run with --auto flag to attempt automatic deployment via SSH"
    fi
}

# Run main function
main "$@"

