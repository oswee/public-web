.PHONY: build
EXENAME=user.command-gateway
build:
	go build -v -o ./build/artifacts/$(EXENAME) ./cmd
.DEFAULT_GOAL := build
