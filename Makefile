.PHONY: build
EXENAME=public-web
build:
	go build -v -o ./build/$(EXENAME) ./cmd
.DEFAULT_GOAL := build
