# MoonBit + Luna UI Blog Admin Tool

# Default task
default: check

# Check MoonBit project
check:
    ~/.moon/bin/moon check

# Build MoonBit project
build:
    ~/.moon/bin/moon build --target js
    node scripts/patch-for-cloudflare.js target/js/release/build/__gen__/server/server.js
    cp target/js/release/build/client/client.js static/markdown_editor.js

# Run development server
dev: build
    pnpm wrangler dev

# Run tests
test:
    ~/.moon/bin/moon test

# Format code
fmt:
    ~/.moon/bin/moon fmt

# Install dependencies
install:
    ~/.moon/bin/moon install
    pnpm install

# Create D1 database
db-create:
    pnpm wrangler d1 create blog-db

# Run migrations locally
db-migrate:
    pnpm wrangler d1 migrations apply blog-db --local

# Run migrations in production
db-migrate-prod:
    pnpm wrangler d1 migrations apply blog-db

# Deploy to Cloudflare Workers
deploy: build
    pnpm wrangler deploy

# Clean build artifacts
clean:
    trash target .mooncakes 2>/dev/null || true
