#!/bin/bash
source ./dev-stack.source
docker stack up -c dev-stack.yml ${STACK_NAME}
