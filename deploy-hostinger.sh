#!/bin/bash

# Hostinger Deployment Script for Spain Academy
# This script builds the project and prepares it for Hostinger deployment

echo "🚀 Starting deployment process for Spain Academy..."

# Step 1: Clean previous build
echo "📦 Cleaning previous build..."
rm -rf dist/

# Step 2: Install dependencies
echo "📥 Installing dependencies..."
npm install

# Step 3: Build the project
echo "🔨 Building project..."
npm run build

# Step 4: Verify build
echo "✅ Verifying build..."
if [ -d "dist" ]; then
    echo "✅ Build successful! Files are in the 'dist' folder."
    echo ""
    echo "📋 Deployment Instructions:"
    echo "1. Go to Hostinger hPanel"
    echo "2. Navigate to Websites → Your Domain → File Manager"
    echo "3. Upload all files from the 'dist' folder to your public_html directory"
    echo "4. Or use FTP to upload the dist folder contents"
    echo ""
    echo "📁 Build location: $(pwd)/dist"
    echo "📊 Build size: $(du -sh dist | cut -f1)"
else
    echo "❌ Build failed! Please check for errors above."
    exit 1
fi

echo ""
echo "🎉 Deployment package ready!"