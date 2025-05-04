#!/bin/bash

echo "🚀 Building the Mali Logistics Link website..."

# Build the project
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "❌ Build failed! Please fix the errors and try again."
  exit 1
fi

echo "✅ Build successful!"

# Make sure the dist directory exists
if [ ! -d "dist" ]; then
  echo "❌ Build directory not found!"
  exit 1
fi

# Copy the configuration files for routing
echo "📄 Copying configuration files..."
cp vercel.json dist/
cp public/.htaccess dist/
cp public/_redirects dist/

echo "🔍 Verifying images..."
if [ ! -d "dist/images" ]; then
  mkdir -p dist/images
fi

# Verify that all banner images are available
echo "🖼️ Checking all banner images..."
IMAGE_ERROR=0
for IMAGE in home-banner.jpg dedouanement-banner.jpg transport-banner.jpg fret-banner.jpg logistique-banner.jpg import-export-banner.jpg services-divers-banner.jpg nos-services-banner.jpg devis-banner.jpg; do
  if [ ! -f "dist/images/$IMAGE" ]; then
    echo "❌ Missing image: $IMAGE"
    IMAGE_ERROR=1
  fi
done

if [ $IMAGE_ERROR -eq 1 ]; then
  echo "⚠️ Some images are missing in the build. Make sure to run 'npm run build' with the latest image files."
else
  echo "✅ All banner images are available."
fi

echo "🎉 Deployment package ready in the 'dist' directory."
echo "📦 You can now upload the contents of the 'dist' directory to your hosting provider." 