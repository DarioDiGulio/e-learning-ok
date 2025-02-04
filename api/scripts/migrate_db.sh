#!/bin/bash

# Define ANSI color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color (reset)

# Prompt the user for the migration name
read -rp "Enter the migration name: " migration_name

# Check if the user provided a name
if [ -z "$migration_name" ]; then
  echo -e "${RED}Error: Migration name cannot be empty. Exiting.${NC}"
  exit 1
fi

# Run the Prisma migrate command with the provided name
echo "Running migration with name: $migration_name..."
if npx prisma migrate dev --name "$migration_name"; then
  echo -e "${GREEN}Migration completed successfully.${NC}"
else
  echo -e "${RED}Migration failed. Please check the error messages above.${NC}"
fi