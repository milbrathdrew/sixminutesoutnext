#!/bin/bash

# deploy-to-gh-pages.sh
# Script to deploy Six Minutes Out Next.js site to GitHub Pages
# Created for deployment automation

set -e # Exit immediately if a command exits with a non-zero status

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Get the current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo -e "${YELLOW}Current branch: $CURRENT_BRANCH${NC}"
echo -e "${YELLOW}Starting deployment process from $CURRENT_BRANCH branch to GitHub Pages...${NC}"

# 2. Build the Next.js project
echo -e "${YELLOW}Building Next.js project...${NC}"
npm run build
echo -e "${GREEN}Build completed successfully!${NC}"

# 3. Clone or update the GitHub Pages repository
if [ -d "../milbrathdrew.github.io" ]; then
  echo -e "${YELLOW}Updating GitHub Pages repository...${NC}"
  cd ../milbrathdrew.github.io
  git pull
else
  echo -e "${YELLOW}Cloning GitHub Pages repository...${NC}"
  cd ..
  git clone https://github.com/milbrathdrew/milbrathdrew.github.io.git
  cd milbrathdrew.github.io
fi

# 4. Clean the repository
echo -e "${YELLOW}Cleaning GitHub Pages repository...${NC}"
rm -rf ./* .[^.]*

# 5. Copy the new build
echo -e "${YELLOW}Copying new build files...${NC}"
cp -r ../sixminutesoutNext/out/* .

# 6. Commit and push changes
echo -e "${YELLOW}Committing and pushing changes to GitHub...${NC}"
git add .
git commit -m "Update site from $CURRENT_BRANCH branch - $(date)"
git push || git push --set-upstream origin main

echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "${GREEN}Site is now live at https://milbrathdrew.github.io/${NC}" 