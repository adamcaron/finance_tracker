#!/bin/bash
source ./prod-stack.source
docker stack up -c prod-stack.yml ${STACK_NAME}
