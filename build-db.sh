#!/bin/sh
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)

docker run -d \
  --name cs236-postgres \
  --env-file "$SCRIPT_DIR/.env" \
  -p 5432:5432 \
  -v cs236-pgdata:/var/lib/postgresql/data \
  postgres:16

docker ps