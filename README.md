# Oswee

> UPDATE: This project are in broken stage and most likely will not be maintained anymore.

This is Front-end App for a **personal** distributed microservices **pet-project**.

This repository is part of several repositories of working solution.
You can run this app stand alone, but there will no be an API gateway and other required services.
Those services and API documentation is placed in separate repositories.

## Motivation

Main motivation is to develop highly scalable real-time collabotrative web application in enterprise resource planning domain.
Under "scalable" I mean application itself and development workflow as well. You can't scale and move fast, if your organizational structure and workflow is wrong.

## Current state

Most recent version could be found in Develop branch.

I am trying to capture progress log in [Wiki](https://github.com/oswee/public-web/wiki/Log)

## This project contains a stack of

### Back-end

- Go
- gRPC
- Protocol Buffers
- Kafka
- Event-Sourcing/CQRS
- MariaDB
- Redis

### Front-end

- TypeScript
- Web Components
- LitElement
- Lit-html
- Redux
- Redux Sagas
- Reselect
- SCSS/SMACSS
- PWA
- WebPack

### Infrastructure

Currently mix of development Docker, Traefik and Go binaries.
I already set up home-lab OpenShift 4 HA cluster and SLOWLY learning how to set up full development pipeline based on self hosted envirionment.

### Project structure

Back-End project structure is inspired by Golang's unofficial [Golang Standard Project Layout](https://github.com/golang-standards/project-layout).
Front-End project structure is inspired by [CRUV](https://frontarm.com/james-k-nelson/react-cruv/) and [Redux Ducks](https://github.com/erikras/ducks-modular-redux) project layouts.

## Development setup

```sh
go get -u github.com/micro/protobuf/{proto,protoc-gen-go}
```

## Kafka

To run Kafka cluster for development I am using Landoop container
[landoop/fast-data-dev](https://hub.docker.com/r/landoop/fast-data-dev)

```sh
docker run --rm -p 2181:2181 -p 3030:3030 -p 8081-8083:8081-8083 -p 9581-9585:9581-9585 -p 9092:9092 -e ADV_HOST=192.168.67.2 landoop/fast-data-dev:latest
```

## Sign In page

![oswee.com Sign In page screenshot](https://raw.githubusercontent.com/oswee/public-web/master/assets/sign-in-fullscreen.png)

## Orders page

![oswee.com Orders page screenshot](https://github.com/oswee/public-web/blob/first-routing/assets/screenshot-1.png)
