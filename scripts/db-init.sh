#!/bin/sh

set -e

# shellcheck source=/dev/null
test -f .env && . .env

# Check if users table exists
TABLE_EXISTS=$(psql "$DATABASE_URL" -tAc "SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'users');")

if [ "$TABLE_EXISTS" = "f" ]; then
  echo "Initializing database schema..."
  psql "$DATABASE_URL" -f database/schema.sql -f database/data.sql
  echo "Database initialized successfully!"
else
  echo "Database already initialized, skipping schema creation."
fi
